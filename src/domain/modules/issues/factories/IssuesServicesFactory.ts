import { AxiosHttpClientProvider } from "../../../shared/providers/HttpClientProvider/implementations/AxiosHttpClientProvider"
import { IHTTPClientProvider } from "../../../shared/providers/HttpClientProvider/models/IHttpClientProvider"
import { FetchIssuesImplementation } from "../services/FetchIssuesImplementation"

export default class IssuesServicesFactory {
  private static httpClientProvider: IHTTPClientProvider

  static initialize(): void {
    this.httpClientProvider = new AxiosHttpClientProvider()
  }

  static fetchIssues(): FetchIssuesImplementation {
    return new FetchIssuesImplementation(this.httpClientProvider)
  }
}

IssuesServicesFactory.initialize()