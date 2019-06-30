import React, { Component, Fragment } from "react";
import FromGroup from "./EditFormGroup";
import placeDB from "../../API/placeDB";
import { Consumer } from "../../context";
import firebaseStorage from "../Firebase";

class EditGemForm extends Component {
  state = {
    placeName: "",
    photos: "",
    category: "",
    description: "",
    progress: "",
    coordinates: "",
    _id: "",
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
        // console.log("Upload is " + progress + "% done");
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
    const results = await placeDB.updatePlace(this.state);
    if (!results) return;
    console.log(results);
    this.setState({
      placeName: "",
      photos: "",
      category: "",
      description: "",
      progress: "",
      coordinates: "",
      _id: ""
    });
    this.props.handleFormClick();
  };

  componentDidMount = () => {
    this.updateState();
  };

  updateState = () => {
    this.setState({
      placeName: this.props.editPlace.placeName,
      photos: this.props.editPlace.photos,
      category: this.props.editPlace.category,
      description: this.props.editPlace.description,
      progress: this.props.editPlace.progress,
      coordinates: this.props.editPlace.coordinates,
      _id: this.props.editPlace._id
    });
  };

  render() {
    return (
      <Consumer>
        {value => {
          return (
            <Fragment>
              <div className="form-group form-active">
                <FromGroup
                  value={this.state}
                  progress={this.state.progress}
                  isUploaded={this.state.isUploaded}
                  photos={this.state.photos}
                  handleOnChange={this.handleOnChange}
                  handleOnClick={this.handleOnClick}
                  handleFileChange={this.handleFileChange}
                  closeForm={this.props.handleFormClick}
                />
              </div>
            </Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default EditGemForm;
