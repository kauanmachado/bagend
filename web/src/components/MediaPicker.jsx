import { Form } from "react-bootstrap";
import { useState } from "react";
import { MdPermMedia } from "react-icons/md";

const MediaPicker = () => {
  const [preview, setPreview] = useState(null);
  const [fotoPerfil, setFotoPerfil] = useState(null);

  //const fotoperfil = document.getElementById("fotoperfil");
  //fotoperfil.addEventListener("fotoperfil", onFileSelected);

  const onFileSelected = (event) => {
    const { files } = event.target;

    if (!files) {
      return;
    }

    const previewUrl = URL.createObjectURL(files[0]);

    setPreview(previewUrl);
  };

  

  return (
    <>
      <Form.Label
        htmlFor="fotoperfil"
        className="w-100 d-flex rounded-pill border p-5 justify-content-center mediaPicker"
      >
        <MdPermMedia className="icon me-2" /> Selecione sua foto de perfil
      </Form.Label>
      <Form.Group
        controlId="formFile"
        className="mb-3 justify-content-center d-flex"
      >
        <Form.Control
          type="file"
          accept="image/png,image/jpeg"
          id="fotoperfil"
          name="fotoperfil"
          value={fotoPerfil}
          className="d-none"
          onChange={(e) => setFotoPerfil(e.target.value)}
        />
        {preview && (
          <img src={preview} alt="" className="rounded-circle previewImg" />
        )}
      </Form.Group>
    </>
  );
};

export default MediaPicker;
