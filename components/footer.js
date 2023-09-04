const Footer = () => {
    return (
        <footer class="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
            <div class="mx-auto max-w-screen-xl text-center">
                <a href="#" class="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
                    <img src="https://cdn.discordapp.com/attachments/1142795590942589030/1147875745880866939/Colorful_Bold_Galaxy_Space_Rocket_Esports_Gaming_Logo_5.png" class="h-8 mr-3" alt="Space Seek Logo" />
                    Star Seek
                </a>
                <p class="my-6 text-gray-500 dark:text-gray-400">public directory for information related to the moon, astronomy, solar system, sky watching and latest news with a power packed weekly newsletter about space and beyond.</p>
                <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">Premium</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6 ">Campaigns</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">Blog</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">Affiliate Program</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">FAQs</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">Contact</a>
                    </li>
                </ul>
                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" class="hover:underline">Star Seek™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    );
};

export default Footer;