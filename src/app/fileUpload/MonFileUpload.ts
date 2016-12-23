import {Component} from "@angular/core";

@Component({
  selector: 'mon-file-upload',
  template: `
   
   	<form method="POST" action="uploadFile" enctype="multipart/form-data">
		File to upload: <input type="file" name="file"><br /> 
		Name: <input type="text" name="name"><br /> <br /> 
		<input type="submit" value="Upload">Téléversion de votre fichier!
	</form>
`
})

export class MonFileUpload {

}
