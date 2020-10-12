    $(document).ready(function() {
        $("#fileInputControl").on("change", fileInputControlChangeEventHandler);
    });
    
    function fileInputControlChangeEventHandler(event) {
        let fileInputControl = event.target;
        let files = fileInputControl.files;
        
        
        let firstFile = files[0];
        
        let fileReader = new FileReader();
        
        // For reading text files
        /*fileReader.onload = function(event){
            let fileContents = event.target.result;
            $("#preview").text(fileContents);
       };
        
       // For reading text files
        //fileReader.readAsText(firstFile);-------------------------------*/
        
       // For reading images     
       /*fileReader.onload = function(event){
            let dataUrl = event.target.result;
            // This is for an image control
            $("#preview").attr("src", `${dataUrl}`);
      };
        
         // For reading images
       fileReader.readAsDataURL(firstFile);-------------------------------*/
        
        // For reading background images     
        /*fileReader.onload = function(event){
            let dataUrl = event.target.result;
            // This is for background image
            $("#preview").css("backgroundImage", `url(${dataUrl})`);
            
      }
       // For reading images
       fileReader.readAsDataURL(firstFile);-----------------------------*/
        
          // For reading background images     
        /*fileReader.onload = function(event){
            let dataUrl = event.target.result;
            // This is for background image
            $("#preview").css("backgroundImage", `url(${dataUrl})`);
            
      }
        fileReader.readAsDataURL(firstFile);-----------------------------*/
        
        
        // For reading audio files     
        fileReader.onload = function(event){
            let dataUrl = event.target.result;
            // This is for audio
            $("#preview").attr("src", `${dataUrl}`);
            
      }    
       
       // For reading audio files
       fileReader.readAsDataURL(firstFile);
        
        
            // For reading video files     
        /*fileReader.onload = function(event){
            let dataUrl = event.target.result;
            // This is for video
            $("#preview").attr("src", `${dataUrl}`);
            
      }    
       
       // For reading video files
       fileReader.readAsDataURL(firstFile);*/
        
     }

