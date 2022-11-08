import { AxiosHttpClientProvider } from "../../../shared/providers/HttpClientProvider/implementations/AxiosHttpClientProvider"
import { IHTTPClientProvider } from "../../../shared/providers/HttpClientProvider/models/IHttpClientProvider"
import { FetchIssuesService } from "../services/FetchIssuesService"

export default class IssuesServicesFactory {
  private static httpClientProvider: IHTTPClientProvider

  static initialize(): void {
    this.httpClientProvider = new AxiosHttpClientProvider()
  }

  static fetchIssues(): FetchIssuesService {
    return new FetchIssuesService(this.httpClientProvider)
  }
}

IssuesServicesFactory.initialize()