import axios from "axios"
import create from "zustand"
import { IIssues } from "../../../pages/catalog"

interface IssueState {
  issues: IIssues[]
  fetchIssues: () => any
}

const useIssueStore = create<IssueState>((set) => ({
  issues: [],
  fetchIssues: async () => {
    const response = await axios.get("http://localhost:3002/issues")
    set((state) => ({ issues: response.data }))}
}))

export default useIssueStore