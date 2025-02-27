import sha1 from "sha1";
import { v4 } from "uuid";

/**
 * @param AccessKeyID {string} 配置AccessKeyID
 * @param AccessKeySecret {string} 配置AccessKeySecret
 * @returns x-AccessKeyID {string} AccessKeyID-添加至请求头
 * @returns x-Signature {string} 签名-添加至请求头
 * @returns x-data {number} 时间戳-添加至请求头
 * @returns x-nonce {string} 随机数-添加至请求头
 */
function mac(AccessKeyID: string, AccessKeySecret: string) {
  let option = { ["x-data"]: +new Date(), ["x-nonce"]: v4() };
  return {
    ["x-AccessKeyID"]: AccessKeyID,
    ["x-Signature"]: sha1(option["x-data"] + option["x-nonce"] + AccessKeyID + AccessKeySecret),
    ...option,
  };
}
export default mac;
