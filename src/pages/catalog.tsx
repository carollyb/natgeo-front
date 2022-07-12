import { Flex } from "@chakra-ui/react"
import ContainerLayout from "../components/Layouts/Container";

function CatalogPage() {
    return (
        <ContainerLayout>
            <Flex
            bgColor={'zinc'}
            color={'mustard'}>
                Página de catálogo
            </Flex>
        </ContainerLayout>
    );
}

export default CatalogPage;