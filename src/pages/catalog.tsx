import { Flex, Button, Text } from "@chakra-ui/react"
import ContainerLayout from "../components/Layouts/Container";
import { useEffect, useState } from "react";
import IssueCard from "../components/IssueCard/IssueCard";
import useIssueStore from "../domain/shared/stores/useIssueStore";
import useS3Store from "../domain/shared/stores/useS3Store";

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
    
  }
  
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
        </div>
        <ContainerLayout>
          {issues && issues.map((issue: IIssues, key: any) => {
            return (
              <IssueCard
              key={key}
              number={issue.number}
              date={issue.date}
              cover={issue.cover}
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