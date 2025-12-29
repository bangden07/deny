import {
    Cmd,
    HeroContainer,
    Link,
    PreImg,
    PreName,
    PreNameMobile,
    PreWrapper,
    Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
    return (
        <HeroContainer data-testid="welcome">
            <div className="info-section">
                <PreName>
                    {`        
8888888b.                                 888      d8b              d8b      888 
888  "Y88b                                888      Y8P              Y8P      888 
888    888                                888                                888 
888    888  .d88b.  88888b.  888  888     88888b.  888 88888888     888  .d88888 
888    888 d8P  Y8b 888 "88b 888  888     888 "88b 888    d88P      888 d88" 888 
888    888 88888888 888  888 888  888     888  888 888   d88P       888 888  888 
888  .d88P Y8b.     888  888 Y88b 888 d8b 888 d88P 888  d88P    d8b 888 Y88b 888 
8888888P"   "Y8888  888  888  "Y88888 Y8P 88888P"  888 88888888 Y8P 888  "Y88888 
                                  888                                            
                             Y8b d88P                                            
                              "Y88P"                                             
          `}
                </PreName>
                <PreWrapper>
                    <PreNameMobile>
                        {`
8888888b.                                 
888  "Y88b                                
888    888                                
888    888  .d88b.  88888b.  888  888     
888    888 d8P  Y8b 888 "88b 888  888     
888    888 88888888 888  888 888  888     
888  .d88P Y8b.     888  888 Y88b 888 d8b 
8888888P"   "Y8888  888  888  "Y88888 Y8P 
                                  888     
                             Y8b d88P     
                              "Y88P"      
888      d8b              d8b      888    
888      Y8P              Y8P      888    
888                                888    
88888b.  888 88888888     888  .d88888    
888 "88b 888    d88P      888 d88" 888    
888  888 888   d88P       888 888  888    
888 d88P 888  d88P    d8b 888 Y88b 888    
88888P"  888 88888888 Y8P 888  "Y88888    
                                          
                                          
                                          
          `}
                    </PreNameMobile>
                </PreWrapper>
                <div>Selamat datang di portfolio terminal saya. (Versi 1.0.0)</div>
                <Seperator>----</Seperator>
                <div>
                    Source code proyek ini dapat ditemukan di{" "}
                    <Link href="https://github.com/bangden07/deny">
                        repo GitHub
                    </Link>
                    .
                </div>
                <Seperator>----</Seperator>
                <div>
                    Untuk melihat daftar perintah, ketik `<Cmd>help</Cmd>`.
                </div>
            </div>
            <div className="illu-section">
                <PreImg>
                    {`
                       ,##,,eew,
                     ,##############C
                  a###############@##
                 7####^\`^"7W7^"@####
                 @#@b\`         ^@#@^
                  ##^,,,,   ,,,,^#^
                 ,,@######"#######=
                  .''555"\` '5555b|
                  T"@  ,,,^,mg,@,*
                     %p||\`~~'.#\`
                      ^Wp  ,#T
                     :b''@@b^}
                  ,^     \` 'b 3-
              .<\` 'p   ^v   #   b   *.
            {      }   #"GpGb   [
            C      3 * @#######Nl      \`
           '            ^@##b     ($    !
         `}
                </PreImg>
            </div>
        </HeroContainer>
    );
};

export default Welcome;
