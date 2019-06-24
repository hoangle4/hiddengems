import React, { Component, Fragment } from "react";
import FromGroup from "./FormGroup";
import placeDB from "../../API/placeDB";
import userDB from "../../API/userDB";
import { Consumer } from "../../context";
import Spinner from "../Spinner";
import firebaseStorage from "../Firebase";
import "./mapforms.css";
class MapFrom extends Component {
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
    if (!e.target.files[0]) {
      console.error({ uploadErr: " file not found, please upload file again" });
      return;
    }
    const { files } = e.target;
    const { name, type, size } = files[0];

    if (!files || size > 5000000) {
      console.error({ uploadErr: " file too big, maximum size : 5mb" });
      return;
    }

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

  handleOnClick = async () => {
    await this.setState({ coordinates: this.props.coordinates });

    const results = await placeDB.createPlace(this.state);
    if (!results) return;

    const response = await userDB.updateUserCreatedPlace(results.data._id);
    if (!response) return;

    this.props.updateMaker(results.data);
    this.setState({
      placeName: "",
      photos: "",
      category: "",
      description: "",
      progress: "",
      coordinates: ""
    });
  };

  render() {
    const { isPinDropped } = this.props;
    return (
      <Consumer>
        {value => {
          return (
            <Fragment>
              <div
                className={`form-group ${isPinDropped ? "form-active" : ""}`}
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
            </Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default MapFrom;
