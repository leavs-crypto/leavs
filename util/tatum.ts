import axios from "axios";

// test net
const API_KEY = "979e8c01-d93e-4897-8aba-802238e9be8c";

// TODO: interface in param
export async function postIPFS(data: object) {
  try {
    const url = `https://api-eu1.tatum.io/v3/ipfs`;
    let form = new FormData();
    // for (const key in data) {
    //   form.append("key", data[key]);
    // 
    form.append("file", "123993939");


    console.log('form: ', form);

    const resp = await axios.post(url, form, {
      headers: {
        "content-type": "multipart/form-data",
        "x-api-key": API_KEY,
      },
    });
    console.log('resp', resp.body, resp.json());
    return resp as any;
  } catch (error) {
    console.log('error: ', error);
    throw Error(error)
  }
}

export async function getIPFS(cid: string) {
  const url = `https://api-eu1.tatum.io/v3/ipfs/${cid}`;
  const response = await axios.get(url);
  return response.data;
}

export const toIPFSUrl = (cid: string) => {
  return "https://ipfs.io/ipfs/" + cid;
};
