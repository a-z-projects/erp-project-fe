export default function ProgressBar() {
  return (
    <ol className="flex items-center w-full">
      <li className="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800">
        <span className="flex items-center justify-center w-5 h-5 bg-blue-100 rounded-full  dark:bg-blue-800 shrink-0"></span>
      </li>
      <li className="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800">
        <span className="flex items-center justify-center w-5 h-5 bg-gray-100 rounded-full dark:bg-gray-700 shrink-0"></span>
      </li>
      <li className="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800">
        <span className="flex items-center justify-center w-5 h-5 bg-gray-100 rounded-full dark:bg-gray-700 shrink-0"></span>
      </li>
      <li className="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800">
        <span className="flex items-center justify-center w-5 h-5 bg-gray-100 rounded-full dark:bg-gray-700 shrink-0"></span>
      </li>
      <li className="flex items-center">
        <span className="flex items-center justify-center w-5 h-5 bg-gray-100 rounded-full dark:bg-gray-700 shrink-0"></span>
      </li>
    </ol>
  );
}
