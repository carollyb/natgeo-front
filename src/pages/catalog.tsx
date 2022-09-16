import { Flex, Text, Button } from "@chakra-ui/react"
import ContainerLayout from "../components/Layouts/Container";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/Context";
import IssueCard from "../components/IssueCard/IssueCard";
import useIssueStore from "../domain/shared/stores/useIssueStore";

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
  
  const { issues, fetchIssues } = useIssueStore()

  const getData = async () => {
    try {
        await fetchIssues()
    } catch (error: Error | any) {
        console.log(`${error.message}`);
    }
  }
  
  useEffect(() => {
    getData()
  }, [])
  
    return (
        <Flex
        m={{base: '10px', md: '70px', lg: '140px'}}
        direction={'column'}
        gap={'37px'}>
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