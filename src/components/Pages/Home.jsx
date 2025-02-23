import { Github, Linkedin } from 'lucide-react';
import profilePic from '../../assets/profile_pic.jpeg';

export const Home = () => {
    return <section 
    id="Home" 
    className="min-h-screen flex items-center justify-center relative">
        <div className="text-center z-10 px-4">
        <img
        src={profilePic} // Use the imported image
        alt="Tarik Abed"
        className="w-48 h-48 md:w-64 md:h-64 rounded-full mx-auto mb-8 object-cover"
        />
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-500 to-emerald-300 bg-clip-text text-transparent leading-right">
         Hi, I'm Tarik Abed
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">I'm a second-year Computer Science student studying at Surrey University. My interests lie in web development, machine learning, and data science within the context of impacting health and business outcomes at scale.

            </p>
            <div className="flex justify-center gap-2">
          <a 
            href="https://github.com/tarikabed" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            <Github size={32} />
          </a>
          <a 
            href="https://www.linkedin.com/in/tarik-abed-147250267/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            <Linkedin size={32} />
          </a>
        </div>
        </div>
    </section>
}