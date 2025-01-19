import { writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";

export class FileHandler {
    constructor() {}

    public writeInFile(file: string, data: string) {
        const filePath = resolve(__dirname, file);
        const dir = dirname(filePath); // Gets the file's parent directory

        // Create the directory, if necessary
        if (!existsSync(dir)) {
            mkdirSync(dir, { recursive: true });
        }

        // Write to the file
        writeFileSync(filePath, data);
    }
}
