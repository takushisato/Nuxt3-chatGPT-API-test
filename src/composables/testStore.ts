// open-aiのAPIアクセスキーを設置
import {OPENAI_API_KEY} from "~/composables/apikey";

export async function postAPI() {
    const text = 'Hello, how are you?';
    const {data, error} = await useFetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ` + OPENAI_API_KEY
        },
        body: {
            prompt: text,
            max_tokens: 60,
            n: 1,
            stop: ['\n']
        }
    });
    console.log(data)
    console.error(error)
    return data;
}
