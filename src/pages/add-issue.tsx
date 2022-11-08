import {
  Button, 
  Text,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText, } from "@chakra-ui/react";
import { useState } from "react";
import BoxContainer from "../components/Layouts/Box";
import useS3Store from "../domain/shared/stores/useS3Store";

function AddIssueForm() {
  const [selectedFile, setSelectedFile] = useState<any>();
  const [isFilePicked, setIsFilePicked] = useState(false)
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
    color="white">
      <FormLabel>Número</FormLabel>
      <Input
      type="text"
      name="number" />
      <FormLabel>Data</FormLabel>
      <Input
      type="text"
      name="date" />
      <FormLabel>Arquivo da capa</FormLabel>
      <Input
      type="file"
      name="cover"
      onChange={changeHandler} />
      <FormLabel>Arquivo da revista</FormLabel>
      <Input
      type="file"
      name="file" />
      <FormLabel>Idioma</FormLabel>
      <Input
      type="text"
      name="language" />
      <FormLabel>Tópicos</FormLabel>
      <Input
      type="text"
      name="topics" />
    </FormControl>
    <div>
      <Text
        color='white'>{isFilePicked && selectedFile.name}
      </Text>
      <Button
      onClick={() => console.log(imageUrl)}
      >clique
        </Button>
      </div>
  </BoxContainer>
  );
}

export default AddIssueForm;