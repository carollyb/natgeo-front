import { Flex, Button, Text } from "@chakra-ui/react"
import ContainerLayout from "../components/Layouts/Container";
import { useEffect, useState } from "react";
import IssueCard from "../components/IssueCard/IssueCard";
import useIssueStore from "../domain/shared/stores/useIssueStore";
import useS3Store from "../domain/shared/stores/useS3Store";
import axios from "axios";

export type IIssues = {
    id?: string;
    number: number;
    date: Date;
    cover: string;
    file: string;
    language: string;
    topics: string
}

function CatalogPage() {
  
  const [selectedFile, setSelectedFile] = useState<any>();
  const [isFilePicked, setIsFilePicked] = useState(false)
  const [loading, setLoading] = useState(true)

  const { issues, fetchIssues } = useIssueStore()
  const { fetchS3url, s3url } = useS3Store()

  const getData = async () => {
    try {
        await fetchIssues()
    } catch (error: Error | any) {
        console.log(`${error.message}`);
    }
  }

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
  
  useEffect(() => {
    getData()
  }, [isFilePicked])
  
    return (
      <Flex
      backgroundColor={'zinc'}
      direction={'column'}
      gap={'37px'}>
        <form>
          <input
          type="file"
          name="file"
          onChange={changeHandler} />
          <Button
          onClick={handleSubmit}
          >clique
          </Button>
        </form>
        <div>
          <Text
          color='white'>{isFilePicked && selectedFile.name}</Text>
          <Button
          onClick={() => console.log(imageUrl)}
          >clique
          </Button>
        </div>
        <ContainerLayout>
          {issues && issues.map((issue: IIssues, key: any) => {
            return (
              <IssueCard
              key={key}
              number={issue.number}
              date={issue.date}
              cover="https://natgeo-issues-1.s3.sa-east-1.amazonaws.com/br-cover-25.jpg" /* cover={`"https://natgeo-issues-1.s3.sa-east-1.amazonaws.com/"${issue.cover}`} */
              file={issue.file}
              language={issue.language}
              topics={issue.topics}
              ></IssueCard>
            )
          })}
        </ContainerLayout>
      </Flex>
    );
}

export default CatalogPage;