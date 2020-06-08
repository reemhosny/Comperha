<template>
    <section class="app-credit">
        <div class="container">
            <div class="row">
                <div class="col-12 slogan-mobile">
                    <p class="text-1 my-2">
                        أكثر من 40 مليون مستخدم
                    </p>
                    <p class="text-2 my-2">
                        وجدوا ما كانوا يبحثون عنه
                    </p>
                    <img src="~/assets/images/image1.png" class="my-2">
                    <p class="text-3">
                        ابحث, قارن, ابدأ
                    </p>
                    <p class="text-4 my-2">
                        اسهل طريقة لايجاد ما تريده فعلا!
                    </p>
                </div>
                <div class="col-md-4 col-12 filter">
                    <div class="filter-btn">
                        <a href="#" class="button is-primary ml-2">بطاقات الائتمان</a>
                        <a href="#" class="button is-outlined ml-2"> قرض شخصي</a>
                        <a href="#" class="button is-outlined">قرض سيارة</a>
                    </div>
                </div>
                
            </div>
        </div>
        <div class="landing-form">
                        <form class="my-1">
                            <b-field>
                               <b-input placeholder="الاسم"></b-input>
                            </b-field>
                            <b-field>
                               <b-input placeholder="رقم الموبايل"></b-input>
                            </b-field>
                            <b-field>
                               <b-input placeholder="القرض المطلوب"></b-input>
                            </b-field>
                             <b-field>
                                <b-select placeholder="اختار المنتج" expanded>
                                    <option value="1"> 1</option>
                                    <option value="2"> 2</option>
                                </b-select>
                           </b-field>
                            <div class="form-action">
                               <button type="submit" class="button is-green btn-block mt-4" expanded>ارسل</button>
                            </div>
                        </form>

                    </div>

    </section>
</template>