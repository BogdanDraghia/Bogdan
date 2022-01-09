import * as React from "react";
function SvgGithub(props) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 78 78"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <rect width={78} height={78} rx={10} fill="#6AA7E8" />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M38.44 20C27.706 20 19 28.706 19 39.44c0 8.588 5.605 15.863 13.239 18.487.954.119 1.312-.477 1.312-.955v-3.339c-5.368 1.193-6.56-2.624-6.56-2.624-.835-2.266-2.147-2.862-2.147-2.862-1.789-1.193.12-1.193.12-1.193 1.908.12 2.981 2.028 2.981 2.028 1.789 2.981 4.532 2.146 5.605 1.67.12-1.313.716-2.147 1.193-2.624-4.293-.477-8.826-2.147-8.826-9.661 0-2.147.716-3.816 2.028-5.248l-.007-.02c-.137-.41-.809-2.412.245-4.989 0 0 1.67-.477 5.367 2.028 1.551-.477 3.22-.597 4.89-.597 1.67 0 3.34.239 4.89.597 3.698-2.505 5.367-2.028 5.367-2.028.99 2.418.46 4.33.277 4.988-.016.056-.029.103-.038.14a7.715 7.715 0 012.027 5.248c0 7.514-4.532 9.065-8.825 9.542.715.596 1.312 1.788 1.312 3.578v5.366c0 .477.357 1.074 1.311.955A19.461 19.461 0 0058 39.44C57.88 28.706 49.174 20 38.44 20z"
                fill="#fff"
            />
        </svg>
    );
}

export default SvgGithub;