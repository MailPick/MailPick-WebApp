import { createPortal } from "react-dom"

const spriteSvgCode = (
  <svg xmlns="http://www.w3.org/2000/svg" className="hidden">
    <symbol id="biInbox" viewBox="0 0 24 24">
      <path d="M7.47 6C7.35759 6.00016 7.24665 6.02559 7.1454 6.0744C7.04414 6.12321 6.95514 6.19416 6.885 6.282L2.31 12H9C9.19891 12 9.38968 12.079 9.53033 12.2197C9.67098 12.3603 9.75 12.5511 9.75 12.75C9.75 13.3467 9.98705 13.919 10.409 14.341C10.831 14.7629 11.4033 15 12 15C12.5967 15 13.169 14.7629 13.591 14.341C14.0129 13.919 14.25 13.3467 14.25 12.75C14.25 12.5511 14.329 12.3603 14.4697 12.2197C14.6103 12.079 14.8011 12 15 12H21.69L17.115 6.282C17.0449 6.19416 16.9559 6.12321 16.8546 6.0744C16.7533 6.02559 16.6424 6.00016 16.53 6H7.47ZM22.401 13.5H15.675C15.5029 14.3477 15.043 15.1099 14.3732 15.6573C13.7034 16.2047 12.865 16.5038 12 16.5038C11.135 16.5038 10.2966 16.2047 9.62681 15.6573C8.95705 15.1099 8.49714 14.3477 8.325 13.5H1.599L2.079 17.343C2.1017 17.5246 2.19002 17.6917 2.32733 17.8127C2.46465 17.9337 2.64147 18.0003 2.8245 18H21.1755C21.3583 17.9999 21.5347 17.9332 21.6717 17.8122C21.8087 17.6912 21.8968 17.5244 21.9195 17.343L22.401 13.5ZM5.7135 5.3445C5.9244 5.08086 6.19192 4.86806 6.49624 4.72187C6.80057 4.57568 7.13389 4.49985 7.4715 4.5H16.5285C16.8661 4.49985 17.1994 4.57568 17.5038 4.72187C17.8081 4.86806 18.0756 5.08086 18.2865 5.3445L23.8365 12.282C23.8989 12.3603 23.9449 12.4502 23.972 12.5466C23.999 12.6429 24.0065 12.7437 23.994 12.843L23.409 17.529C23.341 18.0733 23.0764 18.5741 22.6651 18.937C22.2538 19.3 21.7241 19.5002 21.1755 19.5H2.8245C2.27593 19.5002 1.74619 19.3 1.33487 18.937C0.923563 18.5741 0.659023 18.0733 0.591001 17.529L0.0060012 12.843C-0.00629318 12.7436 0.00144183 12.6428 0.0287499 12.5464C0.056058 12.4501 0.102386 12.3602 0.165001 12.282L5.7135 5.3445Z" fill="currentColor"/>
    </symbol>
    
    <symbol id="file" viewBox="0 0 24 24">
      <path d="M20.0306 7.71938L14.7806 2.46938C14.7109 2.39975 14.6282 2.34454 14.5371 2.3069C14.4461 2.26926 14.3485 2.24992 14.25 2.25H5.25C4.85218 2.25 4.47064 2.40804 4.18934 2.68934C3.90804 2.97064 3.75 3.35218 3.75 3.75V20.25C3.75 20.6478 3.90804 21.0294 4.18934 21.3107C4.47064 21.592 4.85218 21.75 5.25 21.75H18.75C19.1478 21.75 19.5294 21.592 19.8107 21.3107C20.092 21.0294 20.25 20.6478 20.25 20.25V8.25C20.2501 8.15148 20.2307 8.05391 20.1931 7.96286C20.1555 7.87182 20.1003 7.78908 20.0306 7.71938ZM15 4.81031L17.6897 7.5H15V4.81031ZM18.75 20.25H5.25V3.75H13.5V8.25C13.5 8.44891 13.579 8.63968 13.7197 8.78033C13.8603 8.92098 14.0511 9 14.25 9H18.75V20.25Z" fill="currentColor"/>
    </symbol>

    <symbol id="hamburger" viewBox="0 0 24 24">
      <path d="M21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H20.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12ZM3.75 6.75H20.25C20.4489 6.75 20.6397 6.67098 20.7803 6.53033C20.921 6.38968 21 6.19891 21 6C21 5.80109 20.921 5.61032 20.7803 5.46967C20.6397 5.32902 20.4489 5.25 20.25 5.25H3.75C3.55109 5.25 3.36032 5.32902 3.21967 5.46967C3.07902 5.61032 3 5.80109 3 6C3 6.19891 3.07902 6.38968 3.21967 6.53033C3.36032 6.67098 3.55109 6.75 3.75 6.75ZM20.25 17.25H3.75C3.55109 17.25 3.36032 17.329 3.21967 17.4697C3.07902 17.6103 3 17.8011 3 18C3 18.1989 3.07902 18.3897 3.21967 18.5303C3.36032 18.671 3.55109 18.75 3.75 18.75H20.25C20.4489 18.75 20.6397 18.671 20.7803 18.5303C20.921 18.3897 21 18.1989 21 18C21 17.8011 20.921 17.6103 20.7803 17.4697C20.6397 17.329 20.4489 17.25 20.25 17.25Z" fill="currentColor"/>
    </symbol>

    <symbol id="notePencil" viewBox="0 0 32 32">
      <path d="M27.7185 8.12143L23.8786 4.28155C23.7894 4.19229 23.6835 4.12149 23.567 4.07318C23.4505 4.02487 23.3256 4 23.1994 4C23.0732 4 22.9483 4.02487 22.8318 4.07318C22.7152 4.12149 22.6094 4.19229 22.5202 4.28155L11.0006 15.8012C10.9115 15.8904 10.8408 15.9963 10.7926 16.1128C10.7444 16.2294 10.7197 16.3543 10.7198 16.4804V20.3202C10.7198 20.5748 10.8209 20.819 11.001 20.999C11.181 21.1791 11.4252 21.2802 11.6798 21.2802H15.5196C15.6457 21.2803 15.7706 21.2556 15.8872 21.2074C16.0037 21.1592 16.1096 21.0885 16.1988 20.9994L27.7185 9.47978C27.8077 9.39063 27.8785 9.28475 27.9268 9.16822C27.9751 9.05168 28 8.92676 28 8.8006C28 8.67445 27.9751 8.54953 27.9268 8.43299C27.8785 8.31645 27.8077 8.21058 27.7185 8.12143ZM15.1225 19.3603H12.6397V16.8776L20.3195 9.19779L22.8022 11.6805L15.1225 19.3603ZM24.1594 10.3234L21.6766 7.84063L23.1994 6.31788L25.6821 8.8006L24.1594 10.3234ZM27.0393 15.5204V26.0801C27.0393 26.5893 26.837 27.0776 26.4769 27.4377C26.1169 27.7977 25.6285 28 25.1193 28H5.91994C5.41074 28 4.9224 27.7977 4.56234 27.4377C4.20228 27.0776 4 26.5893 4 26.0801V6.88066C4 6.37146 4.20228 5.88312 4.56234 5.52306C4.9224 5.163 5.41074 4.96072 5.91994 4.96072H16.4796C16.7342 4.96072 16.9784 5.06186 17.1584 5.24189C17.3384 5.42192 17.4396 5.66609 17.4396 5.92069C17.4396 6.17529 17.3384 6.41947 17.1584 6.5995C16.9784 6.77953 16.7342 6.88066 16.4796 6.88066H5.91994V26.0801H25.1193V15.5204C25.1193 15.2658 25.2205 15.0216 25.4005 14.8416C25.5805 14.6616 25.8247 14.5604 26.0793 14.5604C26.3339 14.5604 26.5781 14.6616 26.7581 14.8416C26.9381 15.0216 27.0393 15.2658 27.0393 15.5204Z" fill="currentColor"/>
    </symbol>

    <symbol id="calendarBlank" viewBox="0 0 32 32">
      <path d="M26 4.13018H23V3.06509C23 2.78261 22.8946 2.5117 22.7071 2.31196C22.5196 2.11221 22.2652 2 22 2C21.7348 2 21.4804 2.11221 21.2929 2.31196C21.1054 2.5117 21 2.78261 21 3.06509V4.13018H11V3.06509C11 2.78261 10.8946 2.5117 10.7071 2.31196C10.5196 2.11221 10.2652 2 10 2C9.73478 2 9.48043 2.11221 9.29289 2.31196C9.10536 2.5117 9 2.78261 9 3.06509V4.13018H6C5.46957 4.13018 4.96086 4.35461 4.58579 4.75409C4.21071 5.15358 4 5.6954 4 6.26035V27.5621C4 28.1271 4.21071 28.6689 4.58579 29.0684C4.96086 29.4679 5.46957 29.6923 6 29.6923H26C26.5304 29.6923 27.0391 29.4679 27.4142 29.0684C27.7893 28.6689 28 28.1271 28 27.5621V6.26035C28 5.6954 27.7893 5.15358 27.4142 4.75409C27.0391 4.35461 26.5304 4.13018 26 4.13018ZM9 6.26035V7.32544C9 7.60792 9.10536 7.87883 9.29289 8.07858C9.48043 8.27832 9.73478 8.39053 10 8.39053C10.2652 8.39053 10.5196 8.27832 10.7071 8.07858C10.8946 7.87883 11 7.60792 11 7.32544V6.26035H21V7.32544C21 7.60792 21.1054 7.87883 21.2929 8.07858C21.4804 8.27832 21.7348 8.39053 22 8.39053C22.2652 8.39053 22.5196 8.27832 22.7071 8.07858C22.8946 7.87883 23 7.60792 23 7.32544V6.26035H26V10.5207H6V6.26035H9ZM26 27.5621H6V12.6509H26V27.5621Z" fill="currentColor"/>
    </symbol>

    <symbol id="list1" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M17.0864 13.8H12V10.2H20.1V10.2373H20.8249C20.9379 10.8075 21 11.3966 21 12C21 15.9408 18.5742 18.2268 18.1037 18.6138C16.4995 20.095 14.3554 21 12 21C11.9223 21 11.8449 20.999 11.7677 20.9971C6.9048 20.8738 3 16.8926 3 12C3 7.02975 7.02975 3 12 3C14.3706 3 16.5207 3.92385 18.1281 5.4219L15.5824 7.96755C14.6289 7.1193 13.3765 6.6 12 6.6C11.8867 6.6 11.7742 6.60349 11.6626 6.61037C9.5416 6.74125 7.75476 8.0976 6.99465 9.9795L6.99165 9.9773C6.73907 10.602 6.6 11.2848 6.6 12C6.6 12.6417 6.71196 13.2573 6.91742 13.8283L6.92265 13.8243C7.65084 15.85 9.55061 17.3174 11.8075 17.3966C11.8714 17.3989 11.9356 17.4 12 17.4C12.1323 17.4 12.2635 17.3952 12.3933 17.3859C13.4267 17.3107 14.4193 16.9371 15.2485 16.3065L15.2509 16.3085C15.251 16.3084 15.2511 16.3084 15.2512 16.3083L15.2485 16.306L15.2472 16.3069C16.092 15.6689 16.7314 14.7974 17.0864 13.8Z" fill="currentColor"/>
    </symbol>

    <symbol id="list2" viewBox="0 0 24 24">
      <path d="M14.9377 12.5809L8.821 3.75H3.75V20.25H9.06163V11.4198L15.179 20.25H20.25V3.75H14.9377V12.5809Z" fill="currentColor"/>
    </symbol>

    <symbol id="paperPlaneTilt" viewBox="0 0 24 24">
      <path d="M21.3113 2.68876C21.1226 2.50025 20.8872 2.36544 20.6291 2.29821C20.3711 2.23098 20.0997 2.23376 19.8431 2.30626H19.8291L1.83469 7.76625C1.54177 7.85049 1.28147 8.02196 1.08843 8.25783C0.895404 8.49371 0.778807 8.78278 0.75417 9.08658C0.729532 9.39037 0.798024 9.69445 0.950524 9.95835C1.10302 10.2222 1.3323 10.4334 1.60781 10.5638L9.63469 14.3653L13.4363 22.3922C13.5563 22.6492 13.7473 22.8666 13.9869 23.0186C14.2264 23.1706 14.5044 23.2509 14.7881 23.25C14.8313 23.25 14.8744 23.2481 14.9175 23.2444C15.2202 23.2199 15.5082 23.1034 15.7428 22.9105C15.9774 22.7176 16.1474 22.4576 16.23 22.1653L21.6863 4.17094C21.6863 4.16626 21.6863 4.16157 21.6863 4.15688C21.7597 3.90091 21.7637 3.63 21.6978 3.37199C21.6319 3.11397 21.4984 2.87815 21.3113 2.68876ZM14.7966 21.7359L14.7919 21.7491L11.1019 13.9594L15.5306 9.52969C15.6653 9.3879 15.7393 9.19908 15.7368 9.00351C15.7343 8.80794 15.6555 8.62108 15.5172 8.48278C15.3789 8.34448 15.1921 8.26568 14.9965 8.26317C14.8009 8.26067 14.6121 8.33466 14.4703 8.46938L10.0406 12.8981L2.25 9.20813H2.26312L20.25 3.75001L14.7966 21.7359Z" fill="currentColor"/>
    </symbol>

    <symbol id="pushPin" viewBox="0 0 24 24">
      <path d="M22.0612 7.62846L16.3716 1.93971C16.2323 1.80038 16.0669 1.68986 15.8849 1.61446C15.7029 1.53905 15.5078 1.50024 15.3108 1.50024C15.1138 1.50024 14.9187 1.53905 14.7367 1.61446C14.5547 1.68986 14.3893 1.80038 14.25 1.93971L9.22218 6.98346C8.22281 6.67033 5.94093 6.29252 3.55968 8.21533C3.39555 8.34731 3.26105 8.51238 3.16494 8.69978C3.06883 8.88719 3.01326 9.09273 3.00185 9.30304C2.99044 9.51334 3.02345 9.72369 3.09872 9.9204C3.174 10.1171 3.28985 10.2957 3.43875 10.4447L7.96875 14.9728L3.96937 18.9694C3.82864 19.1101 3.74958 19.301 3.74958 19.5C3.74958 19.699 3.82864 19.8899 3.96937 20.0306C4.1101 20.1714 4.30097 20.2504 4.5 20.2504C4.69902 20.2504 4.88989 20.1714 5.03062 20.0306L9.02718 16.0313L13.5544 20.5585C13.6935 20.6982 13.8589 20.8092 14.041 20.8849C14.2231 20.9607 14.4184 20.9998 14.6156 21C14.6512 21 14.6859 21 14.7216 21C14.9354 20.9852 15.1435 20.9245 15.3318 20.8221C15.5201 20.7197 15.6842 20.578 15.8128 20.4066C17.6541 17.9597 17.4769 15.9703 17.0494 14.7816L22.0622 9.75002C22.2014 9.61066 22.3119 9.44524 22.3872 9.2632C22.4625 9.08115 22.5013 8.88605 22.5012 8.68904C22.5011 8.49203 22.4622 8.29697 22.3867 8.11499C22.3112 7.93301 22.2006 7.76769 22.0612 7.62846ZM21 8.68971L15.6309 14.0766C15.5201 14.1879 15.4469 14.3312 15.4219 14.4863C15.3968 14.6414 15.4211 14.8004 15.4912 14.941C16.3781 16.7156 15.3225 18.5588 14.6156 19.4991L4.5 9.38252C5.6325 8.46939 6.71625 8.22846 7.545 8.22846C8.07086 8.22128 8.5924 8.32443 9.07593 8.53127C9.217 8.60187 9.37674 8.62619 9.53243 8.60078C9.68812 8.57536 9.83183 8.5015 9.94312 8.38971L15.3112 3.00002L21 8.68877V8.68971Z" fill="currentColor"/>
    </symbol>

    <symbol id="trash" viewBox="0 0 24 24">
      <path d="M20.25 4.5H16.5V3.75C16.5 3.15326 16.2629 2.58097 15.841 2.15901C15.419 1.73705 14.8467 1.5 14.25 1.5H9.75C9.15326 1.5 8.58097 1.73705 8.15901 2.15901C7.73705 2.58097 7.5 3.15326 7.5 3.75V4.5H3.75C3.55109 4.5 3.36032 4.57902 3.21967 4.71967C3.07902 4.86032 3 5.05109 3 5.25C3 5.44891 3.07902 5.63968 3.21967 5.78033C3.36032 5.92098 3.55109 6 3.75 6H4.5V19.5C4.5 19.8978 4.65804 20.2794 4.93934 20.5607C5.22064 20.842 5.60218 21 6 21H18C18.3978 21 18.7794 20.842 19.0607 20.5607C19.342 20.2794 19.5 19.8978 19.5 19.5V6H20.25C20.4489 6 20.6397 5.92098 20.7803 5.78033C20.921 5.63968 21 5.44891 21 5.25C21 5.05109 20.921 4.86032 20.7803 4.71967C20.6397 4.57902 20.4489 4.5 20.25 4.5ZM9 3.75C9 3.55109 9.07902 3.36032 9.21967 3.21967C9.36032 3.07902 9.55109 3 9.75 3H14.25C14.4489 3 14.6397 3.07902 14.7803 3.21967C14.921 3.36032 15 3.55109 15 3.75V4.5H9V3.75ZM18 19.5H6V6H18V19.5ZM10.5 9.75V15.75C10.5 15.9489 10.421 16.1397 10.2803 16.2803C10.1397 16.421 9.94891 16.5 9.75 16.5C9.55109 16.5 9.36032 16.421 9.21967 16.2803C9.07902 16.1397 9 15.9489 9 15.75V9.75C9 9.55109 9.07902 9.36032 9.21967 9.21967C9.36032 9.07902 9.55109 9 9.75 9C9.94891 9 10.1397 9.07902 10.2803 9.21967C10.421 9.36032 10.5 9.55109 10.5 9.75ZM15 9.75V15.75C15 15.9489 14.921 16.1397 14.7803 16.2803C14.6397 16.421 14.4489 16.5 14.25 16.5C14.0511 16.5 13.8603 16.421 13.7197 16.2803C13.579 16.1397 13.5 15.9489 13.5 15.75V9.75C13.5 9.55109 13.579 9.36032 13.7197 9.21967C13.8603 9.07902 14.0511 9 14.25 9C14.4489 9 14.6397 9.07902 14.7803 9.21967C14.921 9.36032 15 9.55109 15 9.75Z" fill="currentColor"/>
    </symbol>

    <symbol id="user" viewBox="0 0 512 512">
      <g>
        <circle cx="256" cy="128" r="128"/>
        <path d="M256,298.667c-105.99,0.118-191.882,86.01-192,192C64,502.449,73.551,512,85.333,512h341.333   c11.782,0,21.333-9.551,21.333-21.333C447.882,384.677,361.99,298.784,256,298.667z"/>
      </g>
    </symbol>

    <symbol id="archive" viewBox="0 0 20 21">
      <path d="M17.5 4.25H2.5C2.16848 4.25 1.85054 4.3817 1.61612 4.61612C1.3817 4.85054 1.25 5.16848 1.25 5.5V7.375C1.25 7.70652 1.3817 8.02446 1.61612 8.25888C1.85054 8.4933 2.16848 8.625 2.5 8.625V15.5C2.5 15.8315 2.6317 16.1495 2.86612 16.3839C3.10054 16.6183 3.41848 16.75 3.75 16.75H16.25C16.5815 16.75 16.8995 16.6183 17.1339 16.3839C17.3683 16.1495 17.5 15.8315 17.5 15.5V8.625C17.8315 8.625 18.1495 8.4933 18.3839 8.25888C18.6183 8.02446 18.75 7.70652 18.75 7.375V5.5C18.75 5.16848 18.6183 4.85054 18.3839 4.61612C18.1495 4.3817 17.8315 4.25 17.5 4.25ZM16.25 15.5H3.75V8.625H16.25V15.5ZM17.5 7.375H2.5V5.5H17.5V7.375ZM7.5 11.125C7.5 10.9592 7.56585 10.8003 7.68306 10.6831C7.80027 10.5658 7.95924 10.5 8.125 10.5H11.875C12.0408 10.5 12.1997 10.5658 12.3169 10.6831C12.4342 10.8003 12.5 10.9592 12.5 11.125C12.5 11.2908 12.4342 11.4497 12.3169 11.5669C12.1997 11.6842 12.0408 11.75 11.875 11.75H8.125C7.95924 11.75 7.80027 11.6842 7.68306 11.5669C7.56585 11.4497 7.5 11.2908 7.5 11.125Z" fill="currentColor"/>
    </symbol>

    <symbol id="doubleForward" viewBox="0 0 20 14">
      <path d="M6.70676 0.746108L0.937527 6.51534C0.829635 6.62349 0.769043 6.77002 0.769043 6.92279C0.769043 7.07556 0.829635 7.22209 0.937527 7.33024L6.70676 13.0995C6.7874 13.1802 6.89017 13.2352 7.00208 13.2575C7.11398 13.2799 7.22999 13.2685 7.33544 13.2249C7.44088 13.1813 7.53103 13.1074 7.59447 13.0125C7.65791 12.9177 7.6918 12.8061 7.69185 12.692V10.2469L6.59105 8.98885C6.55643 9.0639 6.53801 9.14624 6.53801 9.23048V11.2995L2.16132 6.92279L6.53801 2.54683V4.6151C6.53801 4.74143 6.57944 4.8635 6.65479 4.96312L7.69281 4.0635C7.69249 4.06347 7.69217 4.06344 7.69185 4.06342V1.15356C7.6918 1.03945 7.65791 0.92792 7.59447 0.833073C7.53103 0.738225 7.44088 0.664322 7.33544 0.620708C7.22999 0.577094 7.11398 0.565729 7.00208 0.58805C6.89017 0.610371 6.7874 0.665376 6.70676 0.746108ZM10.3844 4.75923V4.80767L10.6417 4.87198C10.5561 4.83313 10.4703 4.79554 10.3844 4.75923Z" fill="currentColor"/>
      <path d="M4.01446 6.51534L9.78369 0.746108C9.86433 0.665376 9.9671 0.610371 10.079 0.58805C10.1909 0.565729 10.3069 0.577094 10.4124 0.620708C10.5178 0.664322 10.608 0.738226 10.6714 0.833073C10.7348 0.92792 10.7687 1.03945 10.7688 1.15356V4.06342C12.6395 4.22351 14.7056 5.13938 16.4053 6.58096C18.452 8.3175 19.7262 10.5552 19.9938 12.8817C20.0147 13.0626 19.978 13.2454 19.889 13.4042C19.8 13.5631 19.6631 13.6897 19.4979 13.7663C19.3327 13.8428 19.1475 13.8653 18.9688 13.8305C18.7901 13.7957 18.6269 13.7055 18.5024 13.5726C17.7092 12.7281 14.8866 10.0576 10.7688 9.82255V12.692C10.7687 12.8061 10.7348 12.9177 10.6714 13.0125C10.608 13.1074 10.5178 13.1813 10.4124 13.2249C10.3069 13.2685 10.1909 13.2799 10.079 13.2575C9.9671 13.2352 9.86433 13.1802 9.78369 13.0995L4.01446 7.33024C3.90657 7.22209 3.84598 7.07556 3.84598 6.92279C3.84598 6.77002 3.90657 6.62349 4.01446 6.51534ZM9.61494 11.2995V9.23048C9.61494 9.07747 9.67572 8.93073 9.78392 8.82254C9.89211 8.71434 10.0389 8.65356 10.1919 8.65356C12.2169 8.65356 14.1892 9.18217 16.0541 10.2257C17.0039 10.7595 17.8889 11.4012 18.6914 12.1382C18.2731 10.4189 17.2188 8.78409 15.6589 7.46077C13.9844 6.04082 11.9407 5.19202 10.1919 5.19202C10.0389 5.19202 9.89211 5.13124 9.78392 5.02304C9.67572 4.91485 9.61494 4.76811 9.61494 4.6151V2.54683L5.23826 6.92279L9.61494 11.2995Z" fill="currentColor"/>
    </symbol>

    <symbol id="forward" viewBox="0 0 20 21">
      <path d="M1.43286 8.80855L7.68286 2.55855C7.77022 2.47109 7.88156 2.4115 8.00279 2.38732C8.12402 2.36314 8.2497 2.37545 8.36393 2.4227C8.47816 2.46995 8.57582 2.55001 8.64455 2.65276C8.71328 2.75551 8.74999 2.87634 8.75005 2.99995V6.1523C10.7766 6.32574 13.0149 7.31792 14.8563 8.87964C17.0735 10.7609 18.454 13.1851 18.7438 15.7054C18.7664 15.9014 18.7267 16.0995 18.6303 16.2715C18.5338 16.4436 18.3855 16.5808 18.2066 16.6637C18.0276 16.7466 17.827 16.771 17.6334 16.7333C17.4398 16.6956 17.263 16.5978 17.1282 16.4539C16.2688 15.539 13.211 12.646 8.75005 12.3914V15.5C8.74999 15.6236 8.71328 15.7444 8.64455 15.8472C8.57582 15.9499 8.47816 16.03 8.36393 16.0772C8.2497 16.1245 8.12402 16.1368 8.00279 16.1126C7.88156 16.0884 7.77022 16.0288 7.68286 15.9414L1.43286 9.69136C1.31598 9.5742 1.25034 9.41545 1.25034 9.24996C1.25034 9.08446 1.31598 8.92572 1.43286 8.80855ZM7.50005 13.9914V11.75C7.50005 11.5842 7.5659 11.4252 7.68311 11.308C7.80032 11.1908 7.95929 11.125 8.12505 11.125C10.3188 11.125 12.4555 11.6976 14.4758 12.8281C15.5048 13.4064 16.4635 14.1016 17.3329 14.9C16.8797 13.0375 15.7375 11.2664 14.0477 9.83277C12.2336 8.29449 10.0196 7.37496 8.12505 7.37496C7.95929 7.37496 7.80032 7.30911 7.68311 7.1919C7.5659 7.07469 7.50005 6.91572 7.50005 6.74996V4.50933L2.75864 9.24996L7.50005 13.9914Z" fill="currentColor"/>
    </symbol>

    <symbol id="reply" viewBox="0 0 20 21">
      <path d="M18.5671 8.80855L12.3171 2.55855C12.2298 2.47109 12.1184 2.4115 11.9972 2.38732C11.876 2.36314 11.7503 2.37545 11.6361 2.4227C11.5218 2.46995 11.4242 2.55001 11.3555 2.65276C11.2867 2.75551 11.25 2.87634 11.25 2.99995V6.1523C9.22339 6.32574 6.98511 7.31792 5.1437 8.87964C2.92651 10.7609 1.54605 13.1851 1.2562 15.7054C1.23355 15.9014 1.27328 16.0995 1.36974 16.2715C1.46619 16.4436 1.61446 16.5808 1.79343 16.6637C1.97241 16.7466 2.17298 16.771 2.36659 16.7333C2.56021 16.6956 2.73701 16.5978 2.87183 16.4539C3.7312 15.539 6.78901 12.646 11.25 12.3914V15.5C11.25 15.6236 11.2867 15.7444 11.3555 15.8472C11.4242 15.9499 11.5218 16.03 11.6361 16.0772C11.7503 16.1245 11.876 16.1368 11.9972 16.1126C12.1184 16.0884 12.2298 16.0288 12.3171 15.9414L18.5671 9.69136C18.684 9.5742 18.7497 9.41545 18.7497 9.24996C18.7497 9.08446 18.684 8.92572 18.5671 8.80855ZM12.5 13.9914V11.75C12.5 11.5842 12.4341 11.4252 12.3169 11.308C12.1997 11.1908 12.0407 11.125 11.875 11.125C9.6812 11.125 7.54448 11.6976 5.52417 12.8281C4.49522 13.4064 3.53652 14.1016 2.66714 14.9C3.12026 13.0375 4.26245 11.2664 5.9523 9.83277C7.76636 8.29449 9.98042 7.37496 11.875 7.37496C12.0407 7.37496 12.1997 7.30911 12.3169 7.1919C12.4341 7.07469 12.5 6.91572 12.5 6.74996V4.50933L17.2414 9.24996L12.5 13.9914Z" fill="currentColor"/>
    </symbol>

    <symbol id="snooze" viewBox="0 0 20 21">
      <path d="M1.25 10.5C1.25 12.2306 1.76318 13.9223 2.72464 15.3612C3.6861 16.8002 5.05267 17.9217 6.65152 18.5839C8.25037 19.2462 10.0097 19.4195 11.707 19.0819C13.4044 18.7442 14.9635 17.9109 16.1872 16.6872C17.4109 15.4635 18.2442 13.9044 18.5819 12.207C18.9195 10.5097 18.7462 8.75037 18.0839 7.15152C17.4217 5.55267 16.3002 4.1861 14.8612 3.22464C13.4223 2.26318 11.7306 1.75 10 1.75C7.68011 1.75245 5.45593 2.67511 3.81552 4.31552C2.17511 5.95593 1.25245 8.18011 1.25 10.5ZM17.4038 10.5C17.4038 11.9643 16.9696 13.3958 16.1561 14.6134C15.3425 15.8309 14.1862 16.7799 12.8333 17.3403C11.4805 17.9006 9.99179 18.0473 8.55558 17.7616C7.11938 17.4759 5.80014 16.7708 4.76469 15.7353C3.72924 14.6999 3.0241 13.3806 2.73842 11.9444C2.45274 10.5082 2.59936 9.01954 3.15974 7.66667C3.72012 6.31379 4.66909 5.15747 5.88664 4.34393C7.1042 3.53038 8.53566 3.09615 10 3.09615C11.9629 3.09838 13.8448 3.87914 15.2328 5.26715C16.6209 6.65516 17.4016 8.53706 17.4038 10.5ZM10 5.11538C10.1785 5.11538 10.3497 5.1863 10.4759 5.31252C10.6022 5.43875 10.6731 5.60995 10.6731 5.78846L10.6731 10.5C10.6731 10.6785 10.6022 10.8497 10.4759 10.9759C10.3497 11.1022 10.1785 11.1731 10 11.1731L5.28846 11.1731C5.10995 11.1731 4.93875 11.1022 4.81252 10.9759C4.6863 10.8497 4.61538 10.6785 4.61538 10.5C4.61538 10.3215 4.6863 10.1503 4.81252 10.0241C4.93875 9.89783 5.10995 9.82692 5.28846 9.82692L9.32692 9.82692L9.32692 5.78846C9.32692 5.60995 9.39784 5.43875 9.52406 5.31252C9.65029 5.1863 9.82149 5.11538 10 5.11538Z" fill="currentColor"/>
    </symbol>

    <symbol id="more" viewBox="0 0 20 21">
      <path d="M10 1.75C8.26942 1.75 6.57769 2.26318 5.13876 3.22464C3.69983 4.1861 2.57832 5.55267 1.91606 7.15152C1.25379 8.75037 1.08051 10.5097 1.41813 12.207C1.75575 13.9044 2.58911 15.4635 3.81282 16.6872C5.03653 17.9109 6.59563 18.7442 8.29296 19.0819C9.9903 19.4195 11.7496 19.2462 13.3485 18.5839C14.9473 17.9217 16.3139 16.8002 17.2754 15.3612C18.2368 13.9223 18.75 12.2306 18.75 10.5C18.7475 8.18011 17.8249 5.95593 16.1845 4.31552C14.5441 2.67511 12.3199 1.75245 10 1.75ZM10 17.9038C8.53566 17.9038 7.1042 17.4696 5.88665 16.6561C4.66909 15.8425 3.72012 14.6862 3.15974 13.3333C2.59936 11.9805 2.45274 10.4918 2.73842 9.05558C3.0241 7.61937 3.72925 6.30014 4.76469 5.26469C5.80014 4.22924 7.11938 3.5241 8.55558 3.23842C9.99179 2.95274 11.4805 3.09936 12.8333 3.65974C14.1862 4.22012 15.3425 5.16909 16.1561 6.38664C16.9696 7.6042 17.4038 9.03566 17.4038 10.5C17.4016 12.4629 16.6209 14.3448 15.2329 15.7328C13.8448 17.1209 11.9629 17.9016 10 17.9038ZM11.0096 10.5C11.0096 10.6997 10.9504 10.8949 10.8395 11.0609C10.7285 11.2269 10.5708 11.3563 10.3864 11.4328C10.2019 11.5092 9.99888 11.5292 9.80303 11.4902C9.60719 11.4513 9.42729 11.3551 9.2861 11.2139C9.1449 11.0727 9.04874 10.8928 9.00979 10.697C8.97083 10.5011 8.99082 10.2981 9.06724 10.1136C9.14365 9.92915 9.27306 9.77147 9.43909 9.66053C9.60512 9.5496 9.80032 9.49038 10 9.49038C10.2678 9.49038 10.5246 9.59675 10.7139 9.78609C10.9032 9.97543 11.0096 10.2322 11.0096 10.5ZM14.7115 10.5C14.7115 10.6997 14.6523 10.8949 14.5414 11.0609C14.4304 11.2269 14.2728 11.3563 14.0883 11.4328C13.9038 11.5092 13.7008 11.5292 13.505 11.4902C13.3091 11.4513 13.1292 11.3551 12.988 11.2139C12.8468 11.0727 12.7507 10.8928 12.7117 10.697C12.6728 10.5011 12.6927 10.2981 12.7692 10.1136C12.8456 9.92915 12.975 9.77147 13.141 9.66053C13.307 9.5496 13.5022 9.49038 13.7019 9.49038C13.9697 9.49038 14.2265 9.59675 14.4158 9.78609C14.6052 9.97543 14.7115 10.2322 14.7115 10.5ZM7.30769 10.5C7.30769 10.6997 7.24848 10.8949 7.13754 11.0609C7.02661 11.2269 6.86893 11.3563 6.68444 11.4328C6.49996 11.5092 6.29696 11.5292 6.10111 11.4902C5.90527 11.4513 5.72537 11.3551 5.58417 11.2139C5.44298 11.0727 5.34682 10.8928 5.30786 10.697C5.26891 10.5011 5.2889 10.2981 5.36532 10.1136C5.44173 9.92915 5.57114 9.77147 5.73717 9.66053C5.9032 9.5496 6.0984 9.49038 6.29808 9.49038C6.56585 9.49038 6.82265 9.59675 7.01199 9.78609C7.20132 9.97543 7.30769 10.2322 7.30769 10.5Z" fill="currentColor"/>
    </symbol>
    <symbol id="arrow" viewBox="0 0 8 16">
    <path d="M1.57838 0.307795L7.72866 7.26199C7.81467 7.3589 7.88291 7.47405 7.92947 7.60084C7.97603 7.72764 8 7.86358 8 8.00087C8 8.13816 7.97603 8.2741 7.92947 8.40089C7.88291 8.52769 7.81467 8.64284 7.72866 8.73975L1.57838 15.6939C1.40507 15.8899 1.17001 16 0.924911 16C0.679813 16 0.444754 15.8899 0.271444 15.6939C0.0981335 15.498 0.000768918 15.2322 0.000768904 14.9551C0.000768889 14.6779 0.0981334 14.4121 0.271444 14.2162L5.76903 8L0.270675 1.78382C0.0973645 1.58786 -6.41592e-07 1.32208 -6.53706e-07 1.04494C-6.6582e-07 0.767806 0.0973645 0.502022 0.270675 0.306058C0.443985 0.110094 0.679044 -2.9682e-08 0.924142 -4.03956e-08C1.16924 -5.11091e-08 1.4043 0.110094 1.57761 0.306058L1.57838 0.307795Z" fill="currentColor"/>
    </symbol>
    <symbol id="plus" viewBox="0 0 32 32">
      <path d="M24 16C24 16.2546 23.8989 16.4988 23.7188 16.6788C23.5388 16.8589 23.2946 16.96 23.04 16.96H16.96V23.04C16.96 23.2946 16.8589 23.5388 16.6788 23.7188C16.4988 23.8989 16.2546 24 16 24C15.7454 24 15.5012 23.8989 15.3212 23.7188C15.1411 23.5388 15.04 23.2946 15.04 23.04V16.96H8.96C8.70539 16.96 8.46121 16.8589 8.28118 16.6788C8.10114 16.4988 8 16.2546 8 16C8 15.7454 8.10114 15.5012 8.28118 15.3212C8.46121 15.1411 8.70539 15.04 8.96 15.04H15.04V8.96C15.04 8.70539 15.1411 8.46121 15.3212 8.28118C15.5012 8.10114 15.7454 8 16 8C16.2546 8 16.4988 8.10114 16.6788 8.28118C16.8589 8.46121 16.96 8.70539 16.96 8.96V15.04H23.04C23.2946 15.04 23.5388 15.1411 23.7188 15.3212C23.8989 15.5012 24 15.7454 24 16Z" fill="currentColor"/>
    </symbol>
      {/* <circle cx="12" cy="12" r="11" fill="#03C75A" /> */}
    <symbol id="naver" viewBox="0 0 24 24">
      <path 
        d="M11.35 10.25L8.50002 6.19995H6.15002V13.8H8.65002V9.74995L11.5 13.8H13.85V6.19995H11.35V10.25Z" 
        fill="#03C75A"
        transform="translate(-8,-8) scale(2)"/>
    </symbol>
    <symbol id="google" viewBox="0 0 48 48">
      <path fill="#fbc02d"
        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
      <path fill="#e53935"
        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
      <path fill="#4caf50"
        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
      <path fill="#1565c0"
        d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
    </symbol>
    <symbol id="refresh" viewBox="0 0 20 20">
      <path d="M18.5 10.0001C18.5002 11.9719 17.7239 13.8644 16.3391 15.2681C14.9543 16.6718 13.0724 17.4736 11.1008 17.5001H11C9.08456 17.5049 7.24085 16.7719 5.85156 15.4532C5.7919 15.3968 5.74394 15.3292 5.71042 15.2542C5.67689 15.1793 5.65846 15.0984 5.65618 15.0163C5.65389 14.9343 5.6678 14.8525 5.6971 14.7758C5.7264 14.6991 5.77053 14.6289 5.82695 14.5693C5.88338 14.5096 5.95101 14.4616 6.02597 14.4281C6.10093 14.3946 6.18176 14.3762 6.26385 14.3739C6.34593 14.3716 6.42767 14.3855 6.50438 14.4148C6.58109 14.4441 6.65128 14.4882 6.71094 14.5446C7.60453 15.3874 8.72663 15.9481 9.93705 16.1568C11.1475 16.3655 12.3926 16.213 13.5168 15.7182C14.641 15.2233 15.5945 14.4083 16.2582 13.3747C16.9218 12.3411 17.2663 11.1349 17.2484 9.90678C17.2305 8.67863 16.8512 7.48296 16.1577 6.46914C15.4642 5.45533 14.4874 4.66833 13.3493 4.20644C12.2112 3.74455 10.9622 3.62826 9.75832 3.8721C8.55447 4.11594 7.44916 4.70909 6.58047 5.57746C6.57409 5.58436 6.5673 5.59088 6.56016 5.59699L4.48359 7.50011H6.625C6.79076 7.50011 6.94973 7.56596 7.06694 7.68317C7.18415 7.80038 7.25 7.95935 7.25 8.12511C7.25 8.29087 7.18415 8.44984 7.06694 8.56705C6.94973 8.68426 6.79076 8.75011 6.625 8.75011H2.875C2.70924 8.75011 2.55027 8.68426 2.43306 8.56705C2.31585 8.44984 2.25 8.29087 2.25 8.12511V4.37511C2.25 4.20935 2.31585 4.05038 2.43306 3.93317C2.55027 3.81596 2.70924 3.75011 2.875 3.75011C3.04076 3.75011 3.19973 3.81596 3.31694 3.93317C3.43415 4.05038 3.5 4.20935 3.5 4.37511V6.70324L5.70703 4.68761C6.75702 3.64171 8.09333 2.93032 9.54729 2.64326C11.0012 2.3562 12.5077 2.50633 13.8764 3.07471C15.2451 3.64309 16.4147 4.60422 17.2376 5.83679C18.0605 7.06935 18.4998 8.51809 18.5 10.0001Z" fill="currentColor"/>
    </symbol>
    <symbol id="filter" viewBox="0 0 20 20">
      <path d="M5.48599 3.24431C6.82214 2.35152 8.39303 1.875 10 1.875C12.1542 1.87727 14.2195 2.73403 15.7427 4.25727C17.266 5.78051 18.1227 7.84581 18.125 10C18.125 11.607 17.6485 13.1779 16.7557 14.514C15.8629 15.8502 14.5939 16.8916 13.1093 17.5065C11.6247 18.1215 9.99099 18.2824 8.41489 17.9689C6.8388 17.6554 5.39106 16.8815 4.25476 15.7452C3.11846 14.6089 2.34463 13.1612 2.03112 11.5851C1.71762 10.009 1.87852 8.37534 2.49348 6.89069C3.10844 5.40605 4.14984 4.13709 5.48599 3.24431ZM6.18046 15.7163C7.31104 16.4718 8.64025 16.875 10 16.875C11.8227 16.8729 13.5702 16.1479 14.8591 14.8591C16.1479 13.5702 16.8729 11.8227 16.875 10C16.875 8.64025 16.4718 7.31104 15.7164 6.18045C14.9609 5.04987 13.8872 4.16868 12.6309 3.64833C11.3747 3.12798 9.99237 2.99183 8.65875 3.2571C7.32514 3.52237 6.10013 4.17715 5.13864 5.13864C4.17716 6.10013 3.52238 7.32513 3.2571 8.65875C2.99183 9.99237 3.12798 11.3747 3.64833 12.6309C4.16868 13.8872 5.04987 14.9609 6.18046 15.7163ZM7.05805 14.1919C6.94083 14.0747 6.87499 13.9157 6.87499 13.7499C6.87499 13.5842 6.94083 13.4252 7.05805 13.308C7.17526 13.1908 7.33423 13.1249 7.49999 13.1249H12.5C12.6657 13.1249 12.8247 13.1908 12.9419 13.308C13.0591 13.4252 13.125 13.5842 13.125 13.7499C13.125 13.9157 13.0591 14.0747 12.9419 14.1919C12.8247 14.3091 12.6657 14.3749 12.5 14.3749L7.49999 14.3749C7.33423 14.3749 7.17526 14.3091 7.05805 14.1919ZM5.80805 11.0669C5.69084 10.9497 5.62499 10.7907 5.62499 10.6249C5.62499 10.4592 5.69084 10.3002 5.80805 10.183C5.9239 10.0671 6.08057 10.0015 6.24426 9.99997H13.7558C13.9194 10.0015 14.0761 10.0672 14.1919 10.183C14.3091 10.3002 14.375 10.4592 14.375 10.6249C14.375 10.7907 14.3091 10.9497 14.1919 11.0669C14.0747 11.1841 13.9157 11.2499 13.75 11.2499L6.24999 11.2499C6.08423 11.2499 5.92526 11.1841 5.80805 11.0669ZM4.37507 7.5C4.37507 7.66576 4.44092 7.82473 4.55813 7.94194C4.67534 8.05915 4.83431 8.125 5.00007 8.125H15.0001C15.1658 8.125 15.3248 8.05915 15.442 7.94194C15.5592 7.82473 15.6251 7.66576 15.6251 7.5C15.6251 7.33424 15.5592 7.17527 15.442 7.05806C15.3248 6.94085 15.1658 6.875 15.0001 6.875L5.00007 6.875C4.83431 6.875 4.67534 6.94085 4.55813 7.05806C4.44092 7.17527 4.37507 7.33424 4.37507 7.5Z" fill="currentColor"/>
    </symbol>
    <symbol id="search" viewBox="0 0 13 13">
      <path d="M12.8536 12.1469L9.72764 9.02153C10.6337 7.93378 11.0855 6.5386 10.989 5.12622C10.8926 3.71384 10.2554 2.393 9.20992 1.43849C8.16445 0.48397 6.79123 -0.0307435 5.37593 0.00142159C3.96063 0.0335867 2.61221 0.610153 1.61118 1.61118C0.610153 2.61221 0.0335867 3.96063 0.00142159 5.37593C-0.0307435 6.79123 0.48397 8.16445 1.43849 9.20992C2.393 10.2554 3.71384 10.8926 5.12622 10.989C6.5386 11.0855 7.93378 10.6337 9.02153 9.72764L12.1469 12.8536C12.1933 12.9 12.2484 12.9368 12.309 12.962C12.3697 12.9871 12.4346 13 12.5003 13C12.5659 13 12.6309 12.9871 12.6915 12.962C12.7521 12.9368 12.8072 12.9 12.8536 12.8536C12.9 12.8072 12.9368 12.7521 12.962 12.6915C12.9871 12.6309 13 12.5659 13 12.5003C13 12.4346 12.9871 12.3697 12.962 12.309C12.9368 12.2484 12.9 12.1933 12.8536 12.1469ZM1.01272 5.50784C1.01272 4.61879 1.27635 3.7497 1.77028 3.01048C2.26421 2.27126 2.96626 1.69511 3.78763 1.35489C4.60901 1.01466 5.51283 0.925644 6.3848 1.09909C7.25677 1.27253 8.05772 1.70065 8.68638 2.32931C9.31503 2.95796 9.74315 3.75892 9.9166 4.63089C10.09 5.50286 10.001 6.40668 9.6608 7.22805C9.32057 8.04943 8.74442 8.75147 8.0052 9.24541C7.26598 9.73934 6.3969 10.003 5.50784 10.003C4.31607 10.0016 3.17348 9.52763 2.33077 8.68492C1.48806 7.84221 1.01404 6.69962 1.01272 5.50784Z" fill="currentColor"/>
    </symbol>
  </svg>
  
)

export default function GlobalSVGProvider() {
  return createPortal(spriteSvgCode, document.body);
}