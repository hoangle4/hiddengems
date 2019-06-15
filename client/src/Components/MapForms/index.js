import React, { Component } from "react";
import FromGroup from "./FormGroup";
import db from "../../API/db";
import firebaseStorage from "../Firebase";
import "./mapforms.css";
class index extends Component {
  state = {
    placeName: "",
    photos: "",
    category: "",
    description: ""
  };

  componentDidMount = () => {
    console.log(firebaseStorage);
  };

  handleOnChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleFileChange = e => {
    const { files, eName } = e.target;
    const { fName, type, lastModified, size } = files[0];
    //Boot out if no files or file bigger than 5MB
    if (!files || size > 5000000) return;

    const storageRef = firebaseStorage.ref("placePhotos/" + fName);
    const upLoadFile = storageRef.put(files[0], { type });

    upLoadFile.on(
      "state_changed",
      async results => {
        let progress =
          (await (results.bytesTransferred / results.totalBytes)) * 100;
        console.log("Upload is " + progress + "% done");
      },
      err => console.log(err),
      () => {
        // Upload completed successfully, now we can get the download URL
        upLoadFile.snapshot.ref.getDownloadURL().then(downloadURL => {
          this.setState({
            [eName]: downloadURL
          });
          console.log(downloadURL);
        });
      }
    );
  };

  handleOnClick = async e => {
    const results = await db.createPlace(this.state);
    console.log(results);
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
          handleOnChange={this.handleOnChange}
          handleOnClick={this.handleOnClick}
          handleFileChange={this.handleFileChange}
        />
      </div>
    );
  }
}

export default index;
