 const config = { 
  dev: {
    baseURL: '/mock'
  },
  prod: {
    baseURL: '/'
  }
}
  
export default process.env.NODE_ENV === 'production' ? config.prod : config.dev
