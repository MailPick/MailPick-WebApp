const useEmailIcon = (email:string) => {
  const getDomainLogo = (email : string) => {
    if(!email || !email.includes("@")) return "user"
    
    const domain = email.split("@")[1]

    if(domain.includes("naver")){
      return "naver"
    } else if(domain.includes("google") || domain.includes("gmail")){
      return "google"
    } else if(domain.includes("hanmail") || domain.includes("daum")){
      return "daum.png"
    } else{
      return "user"
    }
    
  }
  return getDomainLogo(email) 
}

export default useEmailIcon;