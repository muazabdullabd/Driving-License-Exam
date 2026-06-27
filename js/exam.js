// প্রশ্নগুলো এলোমেলো করা
questions.sort(() => Math.random() - 0.5);

// প্রথম ২০টি প্রশ্ন নেওয়া
const examQuestions = questions.slice(0,20);

console.log(examQuestions);
