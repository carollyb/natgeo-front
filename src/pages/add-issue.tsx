import {
  Button, 
  Text,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage
 } from "@chakra-ui/react";
import { useState } from "react";
import CustomInput from "../components/CustomInput/CustomInput";
import BoxContainer from "../components/Layouts/Box";
import useS3Store from "../domain/shared/stores/useS3Store";

function AddIssueForm() {
  const [selectedFile, setSelectedFile] = useState<any>();
  const [isFilePicked, setIsFilePicked] = useState(false)
  const [isIssueFilePicked, setIsIssueFilePicked] = useState(false)
  const [selectedIssueFile, setSelectedIssueFile] = useState<any>();
  const [loading, setLoading] = useState(true)

  const { fetchS3url, s3url } = useS3Store()

  const changeHandler = async (event: any) => {
    setSelectedFile(event.target.files[0])
    setIsFilePicked(true)
  }

  const handleSubmit = async () => {
    await fetchS3url()

    await fetch(s3url, {
      method: "PUT",
      headers: {
        "Content-Type": "image/jpg"
      },
      body: selectedFile
    })
    setLoading(false)
  }

  const imageUrl = s3url.split('?')[0]
  
  return (
    <BoxContainer>
    <FormControl
    onSubmit={handleSubmit}
    width="30%"
    color="white"
    >
      <FormLabel>Número</FormLabel>
      <CustomInput
      type="text"
      name="number" />
      <FormLabel>Data</FormLabel>
      <CustomInput
      type="text"
      name="date" />
      <label>
        Arquivo da capa
        <p>{isFilePicked ? selectedFile.name : 'Selecione...'}</p>
        <CustomInput
        type="file"
        name="cover"
        display="none"
        onChange={changeHandler} />
      </label>
      <label>
        Arquivo da revista
        <p>{isIssueFilePicked ? selectedIssueFile.name : 'Selecione...'}</p>
        <CustomInput
        type="file"
        name="cover"
        display="none"/>
      </label>
      <CustomInput
      type="file"
      name="file" />
      <FormLabel>Idioma</FormLabel>
      <CustomInput
      type="text"
      name="language" />
      <FormLabel>Tópicos</FormLabel>
      <CustomInput
      type="text"
      name="topics" />
    </FormControl>
    <div>
      
      <Button
      onClick={() => console.log(imageUrl)}
      >clique
        </Button>
    </div>
  </BoxContainer>
  );
}

export default AddIssueForm;