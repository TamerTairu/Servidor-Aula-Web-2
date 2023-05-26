export default function BuildPath(pathDirName: string): string {
	const paths: string[] = pathDirName.split("\\");
	let path: string = "";
	for (let i: number = 0; i < paths.length - 1; i++) {
		path = path + paths[i] + "\\";
	}
	return path;
}
