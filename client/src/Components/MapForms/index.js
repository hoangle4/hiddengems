import React, { Component } from "react";
import FromGroup from "./FormGroup";
import db from "../../API/placeDB";
import firebaseStorage from "../Firebase";
import "./mapforms.css";
class index extends Component {
  state = {
    placeName: "",
    photos: "",
    category: "",
    description: "",
    progress: "",
    coordinates: "",
    isUploaded: false
  };

  handleOnChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleFileChange = e => {
    const { files } = e.target;
    const { name, type, lastModified, size } = files[0];
    //Boot out if no files or file bigger than 5MB
    if (!files || size > 5000000) return;

    const storageRef = firebaseStorage.ref("placePhotos/" + name);
    const upLoadFile = storageRef.put(files[0], { type });

    upLoadFile.on(
      "state_changed",
      async results => {
        let progress =
          (await (results.bytesTransferred / results.totalBytes)) * 100;
        console.log("Upload is " + progress + "% done");
        this.setState({ progress: progress });
      },
      err => console.log(err),
      () => {
        // Upload completed successfully, now we can get the download URL
        upLoadFile.snapshot.ref.getDownloadURL().then(downloadURL => {
          this.setState({
            photos: downloadURL,
            isUploaded: true
          });
        });
      }
    );
  };

  handleOnClick = async e => {
    await this.setState({ coordinates: this.props.coordinates });
    const results = await db.createPlace(this.state);
  };

  render() {
    const { isPinDropped } = this.props;
    return (
      <div
        className="form-group"
        style={
          isPinDropped
            ? { height: "80vh", display: "block" }
            : { display: "none" }
        }
      >
        <FromGroup
          value={this.state}
          progress={this.state.progress}
          isUploaded={this.state.isUploaded}
          photos={this.state.photos}
          handleOnChange={this.handleOnChange}
          handleOnClick={this.handleOnClick}
          handleFileChange={this.handleFileChange}
        />
      </div>
    );
  }
}

export default index;
