'use client';

import { useEffect } from 'react';

export default function Accordion() {
  useEffect(() => {
    import('flowbite');
  }, []);

  return (
    <div dir='rtl' className='p-4' id="accordion-flush" data-accordion="collapse">
          
        <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
            <h2 id="accordion-flush-heading-1">
                <button type="button" className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
                    <span className='font-bold'>  1- چه نقش‌هایی را هوش مصنوعی در خدمات بانکی ایفا می‌کند؟</span>
                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                    </svg>
                </button>
            </h2>
                <div id="accordion-flush-body-1" className="hidden" aria-labelledby="accordion-flush-heading-1">
                    <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                        <p className="mb-2 text-gray-500 dark:text-gray-400">هوش مصنوعی با تحلیل دقیق داده‌ها و پیش‌بینی رفتار مشتری، امنیت تراکنش‌ها را افزایش داده و خدمات بانکی را به‌صورت شخصی‌سازی‌شده و هوشمند ارائه می‌دهد، همچنین با اتوماسیون فرآیندها و پاسخگویی سریع، تجربه مشتری را بهبود می‌بخشد و کارایی سیستم‌های مالی را به طور چشمگیری افزایش می‌دهد.</p>
                    </div>
                </div>

            <h2 id="accordion-flush-heading-2">
                <button type="button" className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" data-accordion-target="#accordion-flush-body-2" aria-expanded="false" aria-controls="accordion-flush-body-2">
                    <span className='font-bold'> 2- چه اقداماتی برای حفاظت از حریم خصوصی داده‌های کاربران باید انجام شود؟</span>
                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                    </svg>
                </button>
            </h2>
                <div id="accordion-flush-body-2" className="hidden" aria-labelledby="accordion-flush-heading-2">
                    <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                        <p className="mb-2 text-gray-500 dark:text-gray-400">شرکت ما با پیاده‌سازی استانداردهای بالای امنیت اطلاعات، از جمله رمزگذاری داده‌ها، احراز هویت چندمرحله‌ای، مدیریت دقیق دسترسی‌ها و آموزش مداوم پرسنل، حفاظت کامل از حریم خصوصی مشتریان را تضمین می‌کند تا از هرگونه دسترسی غیرمجاز جلوگیری شده و اعتماد کاربران حفظ شود.</p>
                    </div>
                </div>
            <h2 id="accordion-flush-heading-3">
                <button type="button" className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" data-accordion-target="#accordion-flush-body-3" aria-expanded="false" aria-controls="accordion-flush-body-3">
                    <span className='font-bold'> 3- فرآیند دریافت وام دیجیتال چگونه کار می‌کند؟</span>
                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                    </svg>
                </button>
            </h2>
                <div id="accordion-flush-body-3" className="hidden" aria-labelledby="accordion-flush-heading-3">
                    <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                        <p className="mb-2 text-gray-500 dark:text-gray-400">فرآیند دریافت وام دیجیتال در شرکت ما به‌صورت کاملاً آنلاین و بدون نیاز به مراجعه حضوری انجام می‌شود؛ مشتری با ارائه مدارک و اطلاعات لازم از طریق پلتفرم دیجیتال، درخواست خود را ثبت می‌کند و سیستم هوشمند ما با تحلیل سریع داده‌ها و ارزیابی اعتبار، تصمیم‌گیری را در کمترین زمان ممکن انجام می‌دهد تا وام به صورت فوری به حساب مشتری واریز شود.</p>
                    </div>
                </div>

                <h2 id="accordion-flush-heading-4">
                    <button type="button" className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" data-accordion-target="#accordion-flush-body-4" aria-expanded="false" aria-controls="accordion-flush-body-4">
                    <span className='font-bold'>  4- چه تفاوتی بین RegTech و FinTech وجود دارد؟</span>
                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                    </svg>
                    </button>
                </h2>
                <div id="accordion-flush-body-4" className="hidden" aria-labelledby="accordion-flush-heading-4">
                    <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                        <p className="mb-2 text-gray-500 dark:text-gray-400">RegTech به‌معنای فناوری‌های مرتبط با مدیریت و خودکارسازی فرایندهای مربوط به قوانین و مقررات در صنعت مالی است که به شرکت‌ها کمک می‌کند تا با هزینه کمتر و دقت بیشتر، الزامات قانونی را رعایت کنند، در حالی که FinTech به فناوری‌هایی گفته می‌شود که خدمات مالی و بانکی را با هدف بهبود تجربه مشتری، افزایش سرعت و کاهش هزینه‌ها نوآوری می‌کنند؛ به‌عبارت دیگر، RegTech تمرکز بر تطبیق و نظارت قانونی دارد و FinTech بر ارائه خدمات مالی نوین تمرکز می‌کند.</p>
                    </div>
                </div>
         </div>
    </div>
  );
}


