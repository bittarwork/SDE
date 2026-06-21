/* SDE601 — Pre-exam review content (full course summary + laws explained simply) */
/* This file only holds the authored HTML/data. The aggregation of the comprehensive
   quiz and flashcards happens in study-app.js, where the CHAPTERS object is available. */

const EXAM_REVIEW = {
  // Sidebar / quick-nav anchors for the review summary view
  nav: [
    { id: "review-map", label: "خريطة المادة" },
    { id: "review-ch1", label: "1 · مقدمة التنقيب" },
    { id: "review-ch2", label: "2 · تهيئة البيانات" },
    { id: "review-ch3", label: "3 · مستودع البيانات" },
    { id: "review-ch4", label: "4 · مكعب البيانات" },
    { id: "review-ch5", label: "5 · قواعد الترافق" },
    { id: "review-ch6", label: "6 · التصنيف" },
    { id: "review-ch7", label: "7 · الانحدار والسلاسل" },
    { id: "review-ch8", label: "8 · العنقدة" },
    { id: "review-ch9", label: "9 · العنقدة عالية الأبعاد" },
    { id: "review-cheatsheet", label: "ورقة القوانين" },
    { id: "review-tips", label: "نصائح ومصطلحات" }
  ],

  summaryHTML: `
<section class="section" id="review-map">
  <h2>خريطة المادة في 30 ثانية</h2>
  <p>كل المادة هي رحلة واحدة: <strong>من بيانات خام فوضوية إلى معرفة مفيدة تساعد في اتخاذ القرار</strong>.</p>
  <div class="note ok">
    <strong>الفكرة الكبرى:</strong>
    نجمع البيانات (فصل 3–4) ← ننظّفها ونجهّزها (فصل 2) ← ضمن إطار <strong>KDD</strong> (فصل 1) ←
    ثم نطبّق خوارزمية تنقيب حسب السؤال: ماذا يُشترى معاً؟ (فصل 5) · إلى أي فئة ينتمي؟ (فصل 6) ·
    كم القيمة المستقبلية؟ (فصل 7) · ما المجموعات الطبيعية؟ (فصل 8–9).
  </div>
  <div class="table-wrap"><table>
    <thead><tr><th>السؤال</th><th>الأداة</th><th>الفصل</th></tr></thead>
    <tbody>
      <tr><td>كيف أجهّز البيانات؟</td><td>تنظيف · تكامل · تحويل · اختزال</td><td>2</td></tr>
      <tr><td>أين أخزّنها للتحليل؟</td><td>مستودع البيانات + المكعب</td><td>3 و 4</td></tr>
      <tr><td>ما الأشياء التي تتكرر معاً؟</td><td>قواعد الترافق (Apriori)</td><td>5</td></tr>
      <tr><td>إلى أي صنف ينتمي العنصر؟</td><td>التصنيف (شجرة قرار، بايز…)</td><td>6</td></tr>
      <tr><td>ما القيمة الرقمية المتوقعة؟</td><td>الانحدار والسلاسل الزمنية</td><td>7</td></tr>
      <tr><td>كيف أجمّع المتشابهين بلا تسميات؟</td><td>العنقدة (K-Means…)</td><td>8 و 9</td></tr>
    </tbody>
  </table></div>
  <p><span class="badge badge-blue">وصفي (Descriptive)</span> يصف ما في البيانات: عنقدة + ترافق.
     <span class="badge badge-green">تنبؤي (Predictive)</span> يتنبأ بقيمة مجهولة: تصنيف + انحدار.</p>
</section>

<section class="section" id="review-ch1">
  <h2>الفصل 1 — مقدمة التنقيب و KDD</h2>
  <h3>أبسط شرح</h3>
  <ul>
    <li><strong>التنقيب في البيانات</strong> = استخراج <strong>معرفة مخفية</strong> من كميات ضخمة من البيانات.</li>
    <li>التنقيب ليس كل شيء، بل <strong>خطوة واحدة</strong> داخل إجرائية أكبر اسمها <strong>KDD</strong> (اكتشاف المعرفة).</li>
  </ul>
  <h3>قانون الحفظ: خطوات KDD السبع (بالترتيب)</h3>
  <div class="formula-card">
    <div class="formula-main">تنظيف ← تكامل ← انتقاء ← تحويل ← تنقيب ← تقييم ← عرض</div>
    <div class="formula-sub">طريقة العمل: كل خطوة تُغذّي التي بعدها — التنقيب في المنتصف، والنتيجة معرفة تُعرض للمستخدم</div>
  </div>
  <div class="note"><strong>وظائف التنقيب:</strong> وصف · تمييز/مقارنة · ترافق · تصنيف · تنبؤ · عنقدة · كشف الشواذ.</div>
  <div class="note warn"><strong>فخّ شائع:</strong> OLAP = تحليل تفاعلي/تلخيص للبيانات الموجودة، أما التنقيب فيكتشف معرفة <em>جديدة</em> بخوارزميات.</div>
</section>

<section class="section" id="review-ch2">
  <h2>الفصل 2 — تهيئة (معالجة) البيانات</h2>
  <h3>أبسط شرح</h3>
  <p>البيانات الحقيقية «وسخة»: ناقصة، فيها ضجيج، ومن مصادر مختلفة. نُصلحها بأربع خطوات:</p>
  <ul>
    <li><strong>تنظيف:</strong> تعبئة المفقود وإزالة الضجيج والقيم الشاذة.</li>
    <li><strong>تكامل:</strong> دمج البيانات من عدة مصادر وتوحيد شكلها.</li>
    <li><strong>تحويل:</strong> تطبيع/تجميع لجعلها بصيغة مناسبة (مثل توحيد المجال).</li>
    <li><strong>اختزال:</strong> تقليل الحجم (أعمدة أو صفوف) مع الحفاظ على المعنى.</li>
  </ul>
  <h3>القانون: التطبيع Min–Max (توحيد المجال)</h3>
  <div class="formula-card">
    <div class="formula-main">v' = (v − min) / (max − min) × (new_max − new_min) + new_min</div>
    <div class="formula-sub">للمجال [0,1]: v' = (v − min) / (max − min)</div>
  </div>
  <div class="note"><strong>كيف يعمل:</strong> يأخذ كل قيمة ويحوّلها إلى مجال جديد ثابت (غالباً 0→1) حتى لا تطغى الأعمدة الكبيرة (كالراتب) على الصغيرة (كالعمر).</div>
  <div class="note ok"><strong>مثال:</strong> عمر=30، أصغر=10، أكبر=60 → v' = (30−10)/(60−10) = 20/50 = <strong>0.4</strong>.</div>
  <h3>القانون: Z-score (التوحيد القياسي)</h3>
  <div class="formula-card">
    <div class="formula-main">z = (x − μ) / σ</div>
    <div class="formula-sub">μ = المتوسط · σ = الانحراف المعياري</div>
  </div>
  <div class="note"><strong>كيف يعمل:</strong> يقيس «كم تبعد القيمة عن المتوسط بوحدات انحراف معياري». z موجب = فوق المتوسط، سالب = تحته. مفيد عند وجود قيم شاذة.</div>
</section>

<section class="section" id="review-ch3">
  <h2>الفصل 3 — مستودع البيانات</h2>
  <h3>أبسط شرح</h3>
  <p><strong>مستودع البيانات</strong> = مخزن واحد كبير يجمع بيانات تاريخية من كل الفروع/الأنظمة لغرض <strong>التحليل واتخاذ القرار</strong> (وليس للعمل اليومي).</p>
  <div class="note"><strong>خصائصه الأربع (احفظها):</strong>
    موجّه نحو موضوع (Subject) · متكامل (Integrated) · متغيّر مع الزمن (Time-variant) · ثابت/غير متطاير (Non-volatile).</div>
  <h3>OLTP مقابل OLAP</h3>
  <div class="table-wrap"><table>
    <thead><tr><th></th><th>OLTP (تشغيلي)</th><th>OLAP (تحليلي)</th></tr></thead>
    <tbody>
      <tr><td>الهدف</td><td>عمليات يومية (بيع، إدخال)</td><td>تحليل وقرار</td></tr>
      <tr><td>البيانات</td><td>حالية ومفصّلة</td><td>تاريخية ومجمّعة</td></tr>
      <tr><td>العمليات</td><td>قراءة/كتابة كثيرة</td><td>قراءة واستعلامات معقدة</td></tr>
    </tbody>
  </table></div>
  <div class="note ok"><strong>ETL = طريقة التحميل:</strong> Extract (استخراج) ← Transform (تحويل/تنظيف) ← Load (تحميل) إلى المستودع.</div>
  <div class="note"><strong>مخطط النجمة (Star):</strong> جدول حقائق واحد في المنتصف (الأرقام المقاسة) محاط بجداول أبعاد (الوصف: زمن، مكان، منتج…).</div>
</section>

<section class="section" id="review-ch4">
  <h2>الفصل 4 — مكعب البيانات وعمليات OLAP</h2>
  <h3>أبسط شرح</h3>
  <p><strong>مكعب البيانات</strong> = طريقة لعرض الحقائق عبر عدة <strong>أبعاد</strong> معاً (مثلاً: المبيعات حسب المدينة × الزمن × المنتج).</p>
  <div class="note"><strong>الجدول = حقائق + أبعاد:</strong> الحقيقة (Fact) هي الرقم المقاس (مبيعات)، والبُعد (Dimension) هو زاوية النظر (مدينة، شهر).</div>
  <h3>عمليات OLAP الخمس (طريقة العمل)</h3>
  <ul>
    <li><strong>Roll-up</strong> (تجميع لأعلى): من تفصيلي إلى مُجمَّع — يوم ← شهر ← سنة.</li>
    <li><strong>Drill-down</strong> (تفصيل لأسفل): العكس — سنة ← شهر ← يوم.</li>
    <li><strong>Slice</strong> (شريحة): تثبيت بُعد واحد على قيمة (مثلاً المدينة = دمشق).</li>
    <li><strong>Dice</strong> (مكعب فرعي): تثبيت عدة أبعاد على عدة قيم.</li>
    <li><strong>Pivot</strong> (تدوير): تبديل المحاور لعرض البيانات بزاوية أخرى.</li>
  </ul>
  <h3>القانون: عدد المكعبات الجزئية (Cuboids)</h3>
  <div class="formula-card">
    <div class="formula-main">عدد cuboids = 2<sup>n</sup></div>
    <div class="formula-sub">n = عدد الأبعاد</div>
  </div>
  <div class="note ok"><strong>مثال:</strong> 3 أبعاد → 2³ = <strong>8</strong> مكعبات جزئية ممكنة (مع التجميعات المختلفة).</div>
</section>

<section class="section" id="review-ch5">
  <h2>الفصل 5 — قواعد الترافق (Association)</h2>
  <h3>أبسط شرح</h3>
  <p>نبحث عن أشياء <strong>تُشترى معاً</strong> كثيراً، فننتج قاعدة مثل: <em>من يشتري خبزاً يشتري حليباً</em> (خبز → حليب).</p>
  <h3>القانونان الأساسيان</h3>
  <div class="formula-card">
    <div class="formula-main">Support(A→B) = σ(A∪B) / |D|</div>
    <div class="formula-sub">كم % من كل المناقلات تحوي A و B معاً — يقيس «الشيوع»</div>
  </div>
  <div class="formula-card">
    <div class="formula-main">Confidence(A→B) = σ(A∪B) / σ(A)</div>
    <div class="formula-sub">من بين من اشترى A، كم % اشترى B أيضاً — يقيس «قوة القاعدة»</div>
  </div>
  <div class="note"><strong>طريقة العمل:</strong> σ = عدد المناقلات الحاوية، |D| = إجمالي عدد المناقلات. نقبل القاعدة فقط إذا كان Support ≥ min_sup و Confidence ≥ min_conf.</div>
  <div class="note ok"><strong>مثال:</strong> |D|=5 مناقلات، {خبز,حليب} ظهرا معاً في 3 → Support = 3/5 = 60%. والخبز وحده في 4 → Confidence(خبز→حليب) = 3/4 = 75%.</div>
  <h3>قانون lift (هل الترابط حقيقي؟)</h3>
  <div class="formula-card">
    <div class="formula-main">lift(A,B) = P(A∪B) / (P(A) × P(B))</div>
    <div class="formula-sub">= 1 مستقلان · &gt; 1 ترابط إيجابي · &lt; 1 ترابط سلبي</div>
  </div>
  <h3>خاصية Apriori (الحيلة الذكية)</h3>
  <div class="formula-card">
    <div class="formula-main">B ⊆ A ⇒ Support(A) ≤ Support(B)</div>
    <div class="formula-sub">أي مجموعة فرعية من مجموعة مكررة تكون مكررة، وأي مجموعة غير مكررة كل ما يحويها غير مكرر</div>
  </div>
  <div class="note"><strong>كيف تُسرّع البحث:</strong> إذا كانت {خبز} نادرة فلا داعي لفحص {خبز, حليب} إطلاقاً — نقصّ الفروع مبكراً.</div>
</section>

<section class="section" id="review-ch6">
  <h2>الفصل 6 — التصنيف (Classification)</h2>
  <h3>أبسط شرح</h3>
  <p>نتعلّم من أمثلة لها <strong>تسمية معروفة</strong> (صنف)، ثم نتنبأ بصنف عنصر جديد. مثل: هل هذا الزبون «سيشتري / لن يشتري».</p>
  <p>الشكل العام: <code>y = f(x)</code> حيث x الواصفات و y الصف.</p>
  <h3>شجرة القرار + قانون الإنتروبي وكسب المعلومات</h3>
  <div class="formula-card">
    <div class="formula-main">info(D) = − Σ pᵢ log₂(pᵢ)</div>
    <div class="formula-sub">الإنتروبي = مقياس «الفوضى/عدم النقاء» في البيانات</div>
  </div>
  <div class="formula-card">
    <div class="formula-main">Gain(A) = info(D) − info_A(D)</div>
    <div class="formula-sub">كسب المعلومات = كم تقلّ الفوضى بعد التقسيم على الواصفة A</div>
  </div>
  <div class="note"><strong>طريقة العمل (ID3):</strong> نحسب Gain لكل واصفة، ونختار <strong>الأعلى Gain</strong> كعقدة تقسيم، ونكرّر حتى تصبح الأوراق نقية.</div>
  <div class="note ok"><strong>حدسياً:</strong> إنتروبي = 0 يعني كل العناصر من صنف واحد (نقاء تام). كلما اقتربنا من 0 كان التقسيم أفضل.</div>
  <h3>مصنّف بايز (Naïve Bayes)</h3>
  <div class="formula-card">
    <div class="formula-main">P(Cᵢ | X) ∝ P(X | Cᵢ) × P(Cᵢ)</div>
    <div class="formula-sub">P(Cᵢ) = |Cᵢ,D| / |D| — نسبة الصنف في بيانات التدريب</div>
  </div>
  <div class="note"><strong>كيف يعمل:</strong> نحسب الاحتمال لكل صنف ونختار <strong>الأكبر</strong>. «Naïve» لأنه يفترض أن الواصفات مستقلة عن بعضها.</div>
  <h3>تقييم المصنّف</h3>
  <div class="formula-card">
    <div class="formula-main">Accuracy = عدد التنبؤات الصحيحة / حجم الاختبار &nbsp;|&nbsp; Error = 1 − Accuracy</div>
    <div class="formula-sub">coverage(R)=n_covers/|D| · accuracy(R)=n_correct/n_covers لقاعدة معينة</div>
  </div>
  <div class="note ok"><strong>مثال:</strong> 90 تنبؤ صحيح من 100 → الدقة 90%، الخطأ 10%.</div>
</section>

<section class="section" id="review-ch7">
  <h2>الفصل 7 — السلاسل الزمنية والانحدار</h2>
  <h3>أبسط شرح</h3>
  <p><strong>الانحدار</strong> يتنبأ بقيمة <strong>رقمية مستمرة</strong> (سعر، راتب) عكس التصنيف الذي يتنبأ بفئة.</p>
  <h3>قانون الانحدار الخطي البسيط</h3>
  <div class="formula-card">
    <div class="formula-main">y = w₀ + w₁x</div>
    <div class="formula-sub">w₀ = نقطة تقاطع الخط مع المحور y · w₁ = ميل الخط</div>
  </div>
  <h3>إيجاد المعاملين بطريقة المربعات الصغرى</h3>
  <div class="formula-card">
    <div class="formula-main">w₁ = Σ(xᵢ − x̄)(yᵢ − ȳ) / Σ(xᵢ − x̄)²</div>
    <div class="formula-main">w₀ = ȳ − w₁·x̄</div>
    <div class="formula-sub">x̄ متوسط x · ȳ متوسط y</div>
  </div>
  <div class="note"><strong>طريقة العمل:</strong> نحسب المتوسطين، ثم w₁ (الميل) من الصيغة، ثم نعوّض لإيجاد w₀. الخط الناتج هو «أفضل خط» يقلّل مجموع مربعات الأخطاء.</div>
  <div class="note ok"><strong>مثال:</strong> إن نتج y = 23.6 + 3.5x، فعند x=10 يكون التنبؤ y = 23.6 + 35 = <strong>58.6</strong>.</div>
  <h3>مكوّنات السلسلة الزمنية</h3>
  <div class="formula-card">
    <div class="formula-main">TS = T + C + S + I &nbsp;(جمعي) &nbsp;|&nbsp; TS = T × C × S × I &nbsp;(جدائي)</div>
    <div class="formula-sub">T اتجاه عام · C دوري · S موسمي · I عشوائي</div>
  </div>
</section>

<section class="section" id="review-ch8">
  <h2>الفصل 8 — العنقدة (Clustering)</h2>
  <h3>أبسط شرح</h3>
  <p>نجمّع العناصر <strong>المتشابهة</strong> في مجموعات (عناقيد) <strong>بدون تسميات مسبقة</strong> (تعلّم غير موجَّه). التشابه يُقاس بالمسافة.</p>
  <h3>قوانين المسافة</h3>
  <div class="formula-card">
    <div class="formula-main">Euclidean: d(i,j) = √( Σ (xᵢₖ − xⱼₖ)² )</div>
    <div class="formula-main">Manhattan: d(i,j) = Σ |xᵢₖ − xⱼₖ|</div>
    <div class="formula-main">Minkowski: d = ( Σ |xᵢₖ − xⱼₖ|ᵖ )^(1/p)</div>
    <div class="formula-sub">Minkowski تعميم: p=1 → مانهاتن · p=2 → إقليدية</div>
  </div>
  <div class="note ok"><strong>مثال إقليدي:</strong> بين (0,0) و(3,4): d = √(3²+4²) = √25 = <strong>5</strong>.</div>
  <h3>K-Means + قانون جودة العنقدة (SSE)</h3>
  <div class="formula-card">
    <div class="formula-main">E = Σᵢ Σ_{p∈Cᵢ} | p − mᵢ |²</div>
    <div class="formula-sub">SSE = مجموع مربعات المسافات بين كل نقطة ومركز عنقودها mᵢ — كلما صغر كان أفضل</div>
  </div>
  <div class="note"><strong>طريقة عمل K-Means:</strong> ① اختر k مراكز ② اربط كل نقطة بأقرب مركز ③ أعد حساب المراكز كمتوسط ④ كرّر حتى تستقر المراكز.</div>
  <div class="note warn"><strong>تذكّر الأنواع:</strong> K-Means (تقسيمي) · Hierarchical (هرمي شجري) · DBSCAN (قائم على الكثافة، يكتشف الشواذ والأشكال غير الكروية).</div>
</section>

<section class="section" id="review-ch9">
  <h2>الفصل 9 — العنقدة متعددة الأبعاد</h2>
  <h3>أبسط شرح</h3>
  <p>في الأبعاد العالية «تفشل» المسافة العادية: كل النقاط تبدو متباعدة بنفس القدر (<strong>لعنة الأبعاد</strong>). الحل: نعنقد ضمن <strong>أبعاد فرعية</strong> مهمة فقط.</p>
  <ul>
    <li><strong>CLIQUE:</strong> يقسّم الفضاء إلى شبكة خلايا ويبحث عن الخلايا <strong>الكثيفة</strong> (grid + density).</li>
    <li><strong>PROCLUS:</strong> عنقدة قائمة على medoids لكن في أبعاد مُسقَطة (projected).</li>
    <li><strong>pcluster:</strong> يبحث عن تشابه في <strong>النمط</strong> لا في القيم المطلقة.</li>
    <li><strong>PCA:</strong> اختزال أبعاد — يحتفظ بأكبر تباين بأقل عدد أبعاد.</li>
  </ul>
  <h3>خاصية Apriori في CLIQUE</h3>
  <div class="formula-card">
    <div class="formula-main">إذا كانت وحدة k-بُعدية كثيفة ⇒ كل إسقاطاتها (k−1)-بُعدية كثيفة</div>
    <div class="formula-sub">طريقة العمل: إن فشل بُعد منخفض فلا داعي لفحص الأبعاد الأعلى — نفس فكرة قصّ Apriori</div>
  </div>
  <h3>قانون pScore (تشابه النمط)</h3>
  <div class="formula-card">
    <div class="formula-main">pScore([dxa, dya, dxb, dyb]) = | (dxa − dxb) − (dya − dyb) |</div>
    <div class="formula-sub">كلما صغر pScore زاد تشابه النمط بين كائنين على سمتين</div>
  </div>
</section>

<section class="section" id="review-cheatsheet">
  <h2>ورقة القوانين — كل المعادلات في مكان واحد</h2>
  <div class="table-wrap"><table>
    <thead><tr><th>الموضوع</th><th>القانون</th></tr></thead>
    <tbody>
      <tr><td>Min–Max</td><td>v' = (v−min)/(max−min)×(new_max−new_min)+new_min</td></tr>
      <tr><td>Z-score</td><td>z = (x − μ) / σ</td></tr>
      <tr><td>عدد المكعبات</td><td>cuboids = 2ⁿ</td></tr>
      <tr><td>Support</td><td>σ(A∪B) / |D|</td></tr>
      <tr><td>Confidence</td><td>σ(A∪B) / σ(A)</td></tr>
      <tr><td>Lift</td><td>P(A∪B) / (P(A)·P(B))</td></tr>
      <tr><td>الإنتروبي</td><td>info(D) = −Σ pᵢ log₂(pᵢ)</td></tr>
      <tr><td>كسب المعلومات</td><td>Gain(A) = info(D) − info_A(D)</td></tr>
      <tr><td>بايز</td><td>P(Cᵢ|X) ∝ P(X|Cᵢ)·P(Cᵢ)</td></tr>
      <tr><td>الدقة</td><td>Accuracy = صحيح / المجموع</td></tr>
      <tr><td>انحدار خطي</td><td>y = w₀ + w₁x</td></tr>
      <tr><td>الميل w₁</td><td>Σ(xᵢ−x̄)(yᵢ−ȳ) / Σ(xᵢ−x̄)²</td></tr>
      <tr><td>التقاطع w₀</td><td>ȳ − w₁·x̄</td></tr>
      <tr><td>إقليدية</td><td>√(Σ(xᵢₖ−xⱼₖ)²)</td></tr>
      <tr><td>مانهاتن</td><td>Σ|xᵢₖ−xⱼₖ|</td></tr>
      <tr><td>K-Means SSE</td><td>E = ΣᵢΣ_{p∈Cᵢ}|p−mᵢ|²</td></tr>
    </tbody>
  </table></div>
</section>

<section class="section" id="review-tips">
  <h2>نصائح سريعة قبل الامتحان</h2>
  <ul>
    <li>فرّق دائماً: <strong>تصنيف</strong> (فئة) ضد <strong>انحدار</strong> (رقم) ضد <strong>عنقدة</strong> (بلا تسميات).</li>
    <li>Support يقيس الشيوع، Confidence يقيس قوة القاعدة، Lift يقيس هل الترابط حقيقي.</li>
    <li>في شجرة القرار: اختر الواصفة ذات <strong>أعلى Gain</strong> (أقل إنتروبي بعد التقسيم).</li>
    <li>OLTP للعمليات اليومية، OLAP/المستودع للتحليل والقرار.</li>
    <li>التطبيع (Min–Max / Z-score) ضروري قبل حساب المسافات في العنقدة.</li>
    <li>خاصية Apriori = «القصّ المبكر» وتظهر في الفصلين 5 و 9.</li>
  </ul>
  <div class="note ok"><strong>طريقة المذاكرة المثلى:</strong> اقرأ هذا الملخص ← راجع «ورقة القوانين» ← ثم اختبر نفسك في «الكويز الشامل» في الأعلى، وأعد الأسئلة الخاطئة فقط.</div>
</section>
`
};
