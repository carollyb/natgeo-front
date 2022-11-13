import { Flex, Button, Text } from "@chakra-ui/react"
import ContainerLayout from "../components/Layouts/Container";
import { useEffect, useState } from "react";
import IssueCard from "../components/IssueCard/IssueCard";
import useIssueStore from "../domain/shared/stores/useIssueStore";
import useS3Store from "../domain/shared/stores/useS3Store";
import axios from "axios";
import BoxContainer from "../components/Layouts/Box";

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
  const { fetchS3url, s3url } = useS3Store()

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
        <ContainerLayout>
          {issues && issues.map((issue: IIssues, key: any) => {
            return (
              <IssueCard
              key={key}
              number={issue.number}
              date={issue.date}
              cover={`https://natgeo-issues-1.s3.sa-east-1.amazonaws.com/${issue.cover}.jpg`}
              file={issue.file}
              language={issue.language}
              topics={issue.topics}
              ></IssueCard>
            )
          })}
        </ContainerLayout>
    );
}

export default CatalogPage;