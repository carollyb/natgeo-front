import { IHTTPClientProvider } from "../../../../shared/providers/HttpClientProvider/models/IHttpClientProvider"
import { FetchIssuesService } from "../FetchIssuesService"

export class FetchIssuesImplementation extends FetchIssuesService {
  constructor(
    httpClientProvider: IHTTPClientProvider
  ) {
    super(httpClientProvider)
  }
}