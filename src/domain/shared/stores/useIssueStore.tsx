import create from "zustand"
import { IIssues } from "../../../pages/catalog"
import IssuesServicesFactory from "../../modules/issues/factories/IssuesServicesFactory"

const getAllIssues = IssuesServicesFactory.fetchIssues()

interface IssueState {
  issues: IIssues[]
  fetchIssues: () => any
}

const useIssueStore = create<IssueState>((set) => ({
  issues: [],
  fetchIssues: async () => {
    const response = await getAllIssues.execute()
    set({ issues: response })
  }
}))

export default useIssueStore