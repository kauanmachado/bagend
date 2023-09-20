import { Form } from "react-bootstrap";
import { useState } from "react";
import { MdPermMedia } from "react-icons/md";
import axios from "axios";

const MediaPicker = ({ onChange }) => {
  const [preview, setPreview] = useState(null);
  //const [fotoPerfil, setFotoPerfil] = useState(null);

  //const fotoperfil = document.getElementById("fotoperfil");
  //fotoperfil.addEventListener("fotoperfil", onFileSelected);

  const onFileSelected = async (event) => {
    const { files } = event.target;

    if (!files) {
      return;
    }

    const selectedFile = files[0];
    const fileName = selectedFile.name; 

    // const formData = new FormData();
    // formData.append("image", files[0]);


    const previewUrl = URL.createObjectURL(selectedFile);
    setPreview(previewUrl);

    const novoValor = event.target.value;
    onChange(fileName);
    setPreview(previewUrl);
  };



  return (
    <>
      <Form.Label
        htmlFor="image"
        className=" d-flex rounded border p-5 justify-content-center mediaPicker"
      >
        <MdPermMedia className="icon me-2" /> Selecione uma imagem
      </Form.Label>
      <Form.Group
        controlId="formFile"
        className="mb-3 justify-content-center d-flex"
      >
        <Form.Control
          type="file"
          accept="image/png,image/jpeg"
          id="image"
          name="image"
          className="d-none"
          onChange={onFileSelected}
        />
        {preview && (
          <img src={preview} alt="" className="rounded-circle previewImg" />
        )}
      </Form.Group>
    </>
  );
};

export default MediaPicker;
