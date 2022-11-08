import { AxiosHttpClientProvider } from "../../../shared/providers/HttpClientProvider/implementations/AxiosHttpClientProvider"
import { IHTTPClientProvider } from "../../../shared/providers/HttpClientProvider/models/IHttpClientProvider"
import { FetchS3SecureUrlService } from "../services/FetchS3SecureUrlService"

export default class S3ServicesFactory {
  private static httpClientProvider: IHTTPClientProvider

  static initialize(): void {
    this.httpClientProvider = new AxiosHttpClientProvider()
  }

  static fetchS3SecureUrl(): FetchS3SecureUrlService {
    return new FetchS3SecureUrlService(this.httpClientProvider)
  }
}

S3ServicesFactory.initialize()