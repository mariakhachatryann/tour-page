<template>
    <div class="w-[472px] bg-white pt-6 px-8 pb-6 rounded-2xl md:w-[320px] ">
        <div class="flex w-full justify-between mb-8">
            <p class="text-2xl font-bold text-[#000A15] ">Log into account</p>
            <div @click="close" class="cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6997 6.29687C18.0902 6.68743 18.0901 7.32059 17.6995 7.71108L7.70704 17.7017C7.31648 18.0922 6.68331 18.0921 6.29283 17.7016C5.90234 17.311 5.9024 16.6778 6.29296 16.2874L16.2855 6.29673C16.676 5.90625 17.3092 5.9063 17.6997 6.29687Z" fill="#6F7D8C"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.29289 6.29289C6.68342 5.90237 7.31658 5.90237 7.70711 6.29289L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L6.29289 7.70711C5.90237 7.31658 5.90237 6.68342 6.29289 6.29289Z" fill="#6F7D8C"/>
                </svg>
            </div>
        </div>
        <div class="w-full mb-4">
            <p class="text-[#333B44] mb-1">Email address</p>
            <input class="bg-[#FFF] w-full mt-1 py-4 px-4 rounded-lg border-[1px] border-solid border-[#E6E6E7] outline-none" type="text" placeholder="Enter here" />
        </div>
        <div class="w-full mb-6">
            <p class="text-[#333B44] mb-1">Password</p>
            <input class="bg-[#FFF] w-full mt-1 py-4 px-4 rounded-lg border-[1px] border-solid border-[#E6E6E7] outline-none" type="text" placeholder="Enter your password" />
        </div>
        <div class="flex justify-between mb-6 md:flex-col md:gap-4">
            <div class="flex items-center gap-2 w-full">
                <CheckInp :forId="'rememberMe'">
                    <p class="text-base">Remember me</p>
                </CheckInp>
            </div>
            <p @click="showRecoverPassword" class="text-primaryBlue whitespace-nowrap text-base font-bold cursor-pointer">Forgot Password</p>
        </div>
        <div class="w-full mb-4">
            <button class="bg-primaryBlue w-full py-3 px-8 text-white rounded-lg font-bold hover:bg-[#4385CE] hover:duration-300 hover:text-[#FDFFFE]">Log in</button>
        </div>
        <div class="w-full mb-6">
            <button @click="createAcc" class="text-primaryBlue border-[1px] border-solid border-primaryBlue w-full py-3 px-8 rounded-lg font-bold hover:bg-primaryBlue hover:text-white hover:duration-300">Create an account</button>
        </div>
        <div class="flex w-full items-center mb-6">
            <div class="w-[44%] h-[1px] bg-[#D0E1F3]"></div>
            <div class="mx-4 text-xs font-medium text-[#999DA1]">OR</div>
            <div class="w-[44%] h-[1px] bg-[#D0E1F3]"></div>
        </div>
        <div class="flex gap-4 md:flex-col">
            <div class="w-1/2 md:w-full flex justify-center items-center gap-2 bg-primaryBlue py-3 rounded-lg cursor-pointer">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18.2987 9.23077H13.8658V5.53846C13.8658 4.51938 14.6602 4.61538 15.639 4.61538H17.4121V0H13.8658C10.9277 0 8.54632 2.47938 8.54632 5.53846V9.23077H5V13.8462H8.54632V24H13.8658V13.8462H16.5255L18.2987 9.23077Z" fill="#FAFAFA"/>
                    </svg>
                </div>
                <p class="text-base font-bold text-white">Facebook</p>
            </div>
            <div class="w-1/2 md:w-full flex justify-center items-center gap-2 bg-white py-3 rounded-lg border-[1px] border-solid border-[#D0E1F3] cursor-pointer">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g clip-path="url(#clip0_609_6724)">
                            <path d="M5.31891 14.5039L4.4835 17.6226L1.43011 17.6872C0.517594 15.9946 0 14.0582 0 12.0004C0 10.0105 0.483938 8.13399 1.34175 6.48169H1.34241L4.06078 6.98006L5.25159 9.68213C5.00236 10.4087 4.86652 11.1887 4.86652 12.0004C4.86661 12.8813 5.02617 13.7252 5.31891 14.5039Z" fill="#FBBB00"/>
                            <path d="M23.7882 9.75879C23.926 10.4847 23.9979 11.2344 23.9979 12.0005C23.9979 12.8597 23.9076 13.6977 23.7355 14.5061C23.1513 17.2568 21.625 19.6588 19.5105 21.3586L19.5098 21.3579L16.0859 21.1832L15.6013 18.1581C17.0043 17.3353 18.1008 16.0476 18.6784 14.5061H12.2617V9.75879H18.772H23.7882Z" fill="#518EF8"/>
                            <path d="M19.5114 21.3568L19.5121 21.3574C17.4556 23.0104 14.8433 23.9994 11.9996 23.9994C7.42969 23.9994 3.45652 21.4451 1.42969 17.6862L5.31848 14.5029C6.33187 17.2075 8.94089 19.1328 11.9996 19.1328C13.3143 19.1328 14.546 18.7774 15.6029 18.157L19.5114 21.3568Z" fill="#28B446"/>
                            <path d="M19.6577 2.76263L15.7702 5.94525C14.6763 5.26153 13.3833 4.86656 11.9981 4.86656C8.87017 4.86656 6.21236 6.88017 5.24973 9.68175L1.3405 6.48131H1.33984C3.337 2.63077 7.36028 0 11.9981 0C14.9097 0 17.5794 1.03716 19.6577 2.76263Z" fill="#F14336"/>
                        </g>
                    <defs>
                        <clipPath id="clip0_609_6724">
                            <rect width="24" height="24" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                </div>
                <p class="text-base font-bold text-[#1C1D1F]">Google</p>
            </div>
        </div>
    </div>    
</template>

<script setup>
const emit = defineEmits(["closeLog", "showRecPass", "createAccount"]);

function close() {
    emit("closeLog")
}

function showRecoverPassword() {
    emit("showRecPass")
}

function createAcc() {
    emit("createAccount")
}

const elementHeight = ref("620px");

function setElementHeight() {
    if (window.innerHeight < 600) {
        elementHeight.value = "400px";
    } else {
        elementHeight.value = "620px"; 
    }
}

onMounted(() => {
    setElementHeight();
});

window.addEventListener("resize", setElementHeight);

onBeforeUnmount(() => {
    window.removeEventListener("resize", setElementHeight);
});
</script>