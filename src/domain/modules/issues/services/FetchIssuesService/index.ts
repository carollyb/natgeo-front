import { BASE_URL } from "../../../../../consts"
import { IHTTPClientProvider } from "../../../../shared/providers/HttpClientProvider/models/IHttpClientProvider"

export class FetchIssuesService {
  constructor(
    private httpClientProvider: IHTTPClientProvider
  ) {}

  async execute() {
    const { data } = await this.httpClientProvider.get<any>({
      url: `${BASE_URL}/issues`,
    })
    return data
  }
}