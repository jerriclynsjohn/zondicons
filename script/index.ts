import * as fs from "fs";
import { Icon } from "./models/icons";
import { generatePreview } from "./preview";

const iconsFolder = "./zondicons/";
const icons: Icon[] = [];

fs.readdirSync(iconsFolder).forEach(file => {
	if(file.split(".")[1] == 'svg'){
		icons.push({
			name: file,
			fileExtension: file.split(".")[1]
		});
	}
});

generatePreview("zondicons", icons, 4);
