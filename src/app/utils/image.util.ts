export class ImageUtil {
  constructor() {
  }

  public static onImageSelected(event): any {
    const file = event.target.files[0];
    var mimeType = file.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (_event) => {
      console.log(reader.result);
      return reader.result;
    }
  }
}
