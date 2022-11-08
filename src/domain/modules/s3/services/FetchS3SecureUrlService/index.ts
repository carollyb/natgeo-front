import { BASE_URL } from "../../../../../consts"
import { IHTTPClientProvider } from "../../../../shared/providers/HttpClientProvider/models/IHttpClientProvider"

export class FetchS3SecureUrlService {
  constructor(
    private httpClientProvider: IHTTPClientProvider
  ) {}

  async execute() {
    const { data } = await this.httpClientProvider.get<any>({
      url: `${BASE_URL}/s3Url`,
    })
    return data
  }
}