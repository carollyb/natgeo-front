import create from "zustand"
import S3ServicesFactory from "../../modules/s3/factories/S3ServicesFactory"

const fetchS3SecureUrl = S3ServicesFactory.fetchS3SecureUrl()

interface S3State {
  s3url: string
  fetchS3url: () => any
}

const useS3Store = create<S3State>((set) => ({
  s3url: '',
  fetchS3url: async () => {
    const response = await fetchS3SecureUrl.execute()
    set({ s3url: response })
  }
}))

export default useS3Store