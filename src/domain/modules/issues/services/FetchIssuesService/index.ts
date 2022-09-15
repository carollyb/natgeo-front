import { IHTTPClientProvider } from "../../../../shared/providers/HttpClientProvider/models/IHttpClientProvider"

export class FetchIssuesService {
  constructor(
    private httpClientProvider: IHTTPClientProvider
  ) {}

  async execute() {
    const { data } = await this.httpClientProvider.get<any>({
      url: "http://localhost/3002/issues",
    })
    return  data
  }
}