/* SDE601 — Concept maps per chapter + full course map */

const CONCEPT_MAPS = {
  nav: [
    { id: "map-chapter", label: "مخطط الفصل الحالي" },
    { id: "map-course", label: "مخطط المادة الكاملة" },
    { id: "map-kdd", label: "KDD وموقع الفصول" },
    { id: "map-types", label: "وصفي vs تنبؤي" }
  ],

  /* Full course — how all chapters connect */
  courseHTML: `
<section class="section cmap-section" id="map-course">
  <h2>🗺️ مخطط المادة الكاملة — ترابط الفصول</h2>
  <p style="color:var(--muted);margin-bottom:1.2rem;font-size:.9rem">
    من البيانات الخام إلى المعرفة: كل فصل يبني على ما قبله ويُمهّد لما يليه.
  </p>
  <div class="cmap cmap-course">
    <div class="cmap-node cmap-root">SDE601 — تنقيب البيانات<br><span class="cmap-sub">Knowledge Discovery from Data</span></div>
    <div class="cmap-vline"></div>

    <div class="cmap-node cmap-ch" data-ch="1">الفصل 1 — مقدمة<br><span class="cmap-sub">لماذا؟ KDD · مصادر · وظائف</span></div>
    <div class="cmap-vline cmap-vline-dashed"></div>
    <div class="cmap-label">إطار العمل العام — كل ما يلي داخل KDD</div>
    <div class="cmap-vline"></div>

    <div class="cmap-row cmap-row-3">
      <div class="cmap-col">
        <div class="cmap-node cmap-ch" data-ch="2">الفصل 2<br><span class="cmap-sub">معالجة أولية<br>تنظيف · تكامل · تحويل · تقليل</span></div>
        <div class="cmap-tag">KDD ①–④</div>
      </div>
      <div class="cmap-col">
        <div class="cmap-node cmap-ch" data-ch="3">الفصل 3<br><span class="cmap-sub">مستودع البيانات<br>OLTP/OLAP · ETL · نجمة</span></div>
        <div class="cmap-tag">بنية التخزين</div>
      </div>
      <div class="cmap-col">
        <div class="cmap-node cmap-ch" data-ch="4">الفصل 4<br><span class="cmap-sub">مكعب البيانات<br>Slice · Dice · Drill · Roll-up</span></div>
        <div class="cmap-tag">تحليل متعدد الأبعاد</div>
      </div>
    </div>

    <div class="cmap-vline"></div>
    <div class="cmap-node cmap-hub">KDD ⑤ — التنقيب الفعلي (Data Mining)</div>
    <div class="cmap-vline"></div>

    <div class="cmap-split">
      <div class="cmap-split-arm cmap-arm-desc">
        <div class="cmap-arm-title">🔍 وصفي Descriptive</div>
        <div class="cmap-vline cmap-vline-short"></div>
        <div class="cmap-row cmap-row-2">
          <div class="cmap-node cmap-ch cmap-sm" data-ch="5">الفصل 5<br><span class="cmap-sub">قواعد الارتباط<br>Apriori · Support · Confidence</span></div>
          <div class="cmap-node cmap-ch cmap-sm" data-ch="8">الفصل 8<br><span class="cmap-sub">عنقدة<br>K-Means · DBSCAN · Hierarchical</span></div>
        </div>
        <div class="cmap-vline cmap-vline-short"></div>
        <div class="cmap-node cmap-ch cmap-sm cmap-ext" data-ch="9">الفصل 9 — امتداد CH8<br><span class="cmap-sub">أبعاد عالية · Subspace · CLIQUE · PROCLUS</span></div>
        <div class="cmap-note">لا تسميات مسبقة — اكتشاف أنماط</div>
      </div>

      <div class="cmap-split-divider"></div>

      <div class="cmap-split-arm cmap-arm-pred">
        <div class="cmap-arm-title">🎯 تنبؤي Predictive</div>
        <div class="cmap-vline cmap-vline-short"></div>
        <div class="cmap-row cmap-row-2">
          <div class="cmap-node cmap-ch cmap-sm" data-ch="6">الفصل 6<br><span class="cmap-sub">تصنيف (موجه)<br>Tree · Bayes · SVM</span></div>
          <div class="cmap-node cmap-ch cmap-sm" data-ch="7">الفصل 7<br><span class="cmap-sub">سلاسل زمنية · انحدار<br>Regression · Smoothing</span></div>
        </div>
        <div class="cmap-note">تعلم موجه — نتائج معروفة مسبقاً</div>
      </div>
    </div>

    <div class="cmap-vline"></div>
    <div class="cmap-node cmap-eval">KDD ⑥–⑦ — تقييم الأنماط + عرض المعرفة</div>
  </div>

  <div class="cmap-legend">
    <span><i class="cmap-dot" style="background:#3b82f6"></i> أساس / إطار</span>
    <span><i class="cmap-dot" style="background:#22c55e"></i> معالجة وتخزين</span>
    <span><i class="cmap-dot" style="background:#f59e0b"></i> وصفي</span>
    <span><i class="cmap-dot" style="background:#ef4444"></i> تنبؤي</span>
  </div>
</section>

<section class="section cmap-section" id="map-kdd">
  <h2>📐 KDD — أين يقع كل فصل؟</h2>
  <div class="cmap cmap-kdd-flow">
    <div class="cmap-kdd-step"><span class="cmap-kdd-num">1</span> تنظيف<div class="cmap-kdd-ch">→ الفصل 2</div></div>
    <div class="cmap-kdd-arrow">→</div>
    <div class="cmap-kdd-step"><span class="cmap-kdd-num">2</span> تكامل<div class="cmap-kdd-ch">→ الفصل 2</div></div>
    <div class="cmap-kdd-arrow">→</div>
    <div class="cmap-kdd-step"><span class="cmap-kdd-num">3</span> انتقاء<div class="cmap-kdd-ch">→ الفصل 2</div></div>
    <div class="cmap-kdd-arrow">→</div>
    <div class="cmap-kdd-step"><span class="cmap-kdd-num">4</span> تحويل<div class="cmap-kdd-ch">→ الفصل 2 + 4</div></div>
    <div class="cmap-kdd-arrow">→</div>
    <div class="cmap-kdd-step cmap-kdd-core"><span class="cmap-kdd-num">5</span> تنقيب<div class="cmap-kdd-ch">→ الفصول 5–9</div></div>
    <div class="cmap-kdd-arrow">→</div>
    <div class="cmap-kdd-step"><span class="cmap-kdd-num">6</span> تقييم<div class="cmap-kdd-ch">→ 5·6·7·8</div></div>
    <div class="cmap-kdd-arrow">→</div>
    <div class="cmap-kdd-step"><span class="cmap-kdd-num">7</span> عرض<div class="cmap-kdd-ch">→ OLAP + Viz</div></div>
  </div>
  <div class="note ok" style="margin-top:1rem">
    <strong>الفصول 3–4</strong> ليست خطوة KDD مستقلة — بل <strong>بنية البنية التحتية</strong> التي تغذّي التنقيب والتحليل (مستودع + مكعب).
  </div>
</section>

<section class="section cmap-section" id="map-types">
  <h2>⚖️ تصنيف تقنيات التنقيب حسب الهدف</h2>
  <div class="compare-grid">
    <div class="compare-box right">
      <strong>وصفي — ماذا يحدث؟</strong>
      <ul>
        <li><strong>CH5:</strong> ماذا يُشترى معاً؟ (Association Rules)</li>
        <li><strong>CH8:</strong> ما المجموعات الطبيعية؟ (Clustering)</li>
        <li><strong>CH9:</strong> عنقدة في أبعاد فرعية (High-D)</li>
      </ul>
    </div>
    <div class="compare-box right">
      <strong>تنبؤي — ماذا سيحدث؟</strong>
      <ul>
        <li><strong>CH6:</strong> إلى أي فئة ينتمي؟ (Classification)</li>
        <li><strong>CH7:</strong> كم القيمة المستقبلية؟ (Regression / TS)</li>
      </ul>
    </div>
  </div>
  <div class="hint-box"><strong>CH6 vs CH8:</strong> التصنيف يحتاج تسميات (Supervised) | العنقدة بدون تسميات (Unsupervised)</div>
</section>
`,

  chapters: {
    1: `
<section class="section cmap-section" id="map-chapter">
  <h2>🗺️ مخطط مفاهيمي — الفصل 1: مقدمة التنقيب</h2>
  <div class="cmap">
    <div class="cmap-node cmap-root">لماذا التنقيب؟<br><span class="cmap-sub">بيانات ضخمة + معرفة مخفية</span></div>
    <div class="cmap-vline"></div>
    <div class="cmap-node cmap-primary">تعريف Data Mining<br><span class="cmap-sub">استخراج معارف من كميات كبيرة</span></div>
    <div class="cmap-vline"></div>
    <div class="cmap-node cmap-hub">KDD — إجرائية اكتشاف المعرفة<br><span class="cmap-sub">7 خطوات: تنظيف → … → عرض</span></div>
    <div class="cmap-vline"></div>
    <div class="cmap-row cmap-row-2">
      <div class="cmap-node">بنية النظام<br><span class="cmap-sub">DB · DW · Mining · UI</span></div>
      <div class="cmap-node">مصادر البيانات<br><span class="cmap-sub">8 أنواع (DB، Web، …)</span></div>
    </div>
    <div class="cmap-vline"></div>
    <div class="cmap-row cmap-row-2">
      <div class="cmap-node">المستودع + المكعب<br><span class="cmap-sub">OLTP vs OLAP</span></div>
      <div class="cmap-node">وظائف التنقيب<br><span class="cmap-sub">وصفي ↔ تنبؤي</span></div>
    </div>
  </div>
  <div class="note ok"><strong>الفكرة المركزية:</strong> التنقيب = قلب KDD (الخطوة 5) — لكن نجاحه يعتمد على التحضير والبنية.</div>
</section>`,

    2: `
<section class="section cmap-section" id="map-chapter">
  <h2>🗺️ مخطط مفاهيمي — الفصل 2: معالجة البيانات</h2>
  <div class="cmap">
    <div class="cmap-node cmap-root">بيانات خام «قذرة»<br><span class="cmap-sub">ناقص · مكرر · شاذ · غير متسق</span></div>
    <div class="cmap-vline"></div>
    <div class="cmap-row cmap-row-4">
      <div class="cmap-node cmap-sm">① تنظيف<br><span class="cmap-sub">Cleaning</span></div>
      <div class="cmap-node cmap-sm">② تكامل<br><span class="cmap-sub">Integration</span></div>
      <div class="cmap-node cmap-sm">③ تحويل<br><span class="cmap-sub">Transform</span></div>
      <div class="cmap-node cmap-sm">④ تقليل<br><span class="cmap-sub">Reduction</span></div>
    </div>
    <div class="cmap-vline"></div>
    <div class="cmap-node cmap-primary">بيانات جاهزة للتنقيب</div>
    <div class="cmap-vline"></div>
    <div class="cmap-row cmap-row-2">
      <div class="cmap-node">تصور البيانات<br><span class="cmap-sub">Visualization · فهم قبل الخوارزميات</span></div>
      <div class="cmap-node">→ الفصول 5–9<br><span class="cmap-sub">مدخلات نظيفة = نتائج صحيحة</span></div>
    </div>
  </div>
  <div class="note warn"><strong>قاعدة ذهبية:</strong> تنقيب في بيانات غير مُجهّزة = أنماط خاطئة.</div>
</section>`,

    3: `
<section class="section cmap-section" id="map-chapter">
  <h2>🗺️ مخطط مفاهيمي — الفصل 3: مستودع البيانات</h2>
  <div class="cmap">
    <div class="cmap-node cmap-root">مصادر متفرقة<br><span class="cmap-sub">OLTP · ملفات · أنظمة تشغيلية</span></div>
    <div class="cmap-vline"></div>
    <div class="cmap-node cmap-hub">ETL<br><span class="cmap-sub">Extract → Transform → Load</span></div>
    <div class="cmap-vline"></div>
    <div class="cmap-node cmap-primary">Data Warehouse<br><span class="cmap-sub">Subject-Oriented · Integrated · Time-Variant · Non-Volatile</span></div>
    <div class="cmap-vline"></div>
    <div class="cmap-row cmap-row-2">
      <div class="cmap-node">OLTP<br><span class="cmap-sub">معاملات · تفصيل · تحديث</span></div>
      <div class="cmap-node">OLAP<br><span class="cmap-sub">تحليل · تجميع · قراءة</span></div>
    </div>
    <div class="cmap-vline"></div>
    <div class="cmap-node">مخطط النجمة Star Schema<br><span class="cmap-sub">Fact + Dimensions → الفصل 4</span></div>
  </div>
</section>`,

    4: `
<section class="section cmap-section" id="map-chapter">
  <h2>🗺️ مخطط مفاهيمي — الفصل 4: مكعب البيانات</h2>
  <div class="cmap">
    <div class="cmap-node cmap-root">نموذج متعدد الأبعاد<br><span class="cmap-sub">Measures + Dimensions</span></div>
    <div class="cmap-vline"></div>
    <div class="cmap-row cmap-row-3">
      <div class="cmap-node cmap-sm">Star</div>
      <div class="cmap-node cmap-sm">Snowflake</div>
      <div class="cmap-node cmap-sm">Fact Constellation</div>
    </div>
    <div class="cmap-vline"></div>
    <div class="cmap-node cmap-hub">Data Cube<br><span class="cmap-sub">مصفوفة n-أبعاد للقياسات</span></div>
    <div class="cmap-vline"></div>
    <div class="cmap-row cmap-row-5">
      <div class="cmap-node cmap-xs">Slice</div>
      <div class="cmap-node cmap-xs">Dice</div>
      <div class="cmap-node cmap-xs">Drill</div>
      <div class="cmap-node cmap-xs">Roll-up</div>
      <div class="cmap-node cmap-xs">Pivot</div>
    </div>
    <div class="cmap-vline"></div>
    <div class="cmap-node">فهرسة OLAP<br><span class="cmap-sub">MOLAP · ROLAP · HOLAP</span></div>
  </div>
</section>`,

    5: `
<section class="section cmap-section" id="map-chapter">
  <h2>🗺️ مخطط مفاهيمي — الفصل 5: قواعد الارتباط</h2>
  <div class="cmap">
    <div class="cmap-node cmap-root">قاعدة معاملات<br><span class="cmap-sub">Market Basket · TIDs</span></div>
    <div class="cmap-vline"></div>
    <div class="cmap-node">Itemset + Rule<br><span class="cmap-sub">X → Y</span></div>
    <div class="cmap-vline"></div>
    <div class="cmap-row cmap-row-2">
      <div class="cmap-node cmap-primary">Support<br><span class="cmap-sub">تكرار المجموعة</span></div>
      <div class="cmap-node cmap-primary">Confidence<br><span class="cmap-sub">P(Y|X)</span></div>
    </div>
    <div class="cmap-vline"></div>
    <div class="cmap-node cmap-hub">Apriori<br><span class="cmap-sub">Frequent → Candidate → Prune</span></div>
    <div class="cmap-vline"></div>
    <div class="cmap-node">Strong Rules<br><span class="cmap-sub">Support ≥ min ∧ Confidence ≥ min</span></div>
  </div>
  <div class="hint-box">وصفي — لا تسميات — يكتشف «ماذا يحدث معاً»</div>
</section>`,

    6: `
<section class="section cmap-section" id="map-chapter">
  <h2>🗺️ مخطط مفاهيمي — الفصل 6: التصنيف</h2>
  <div class="cmap">
    <div class="cmap-node cmap-root">Supervised Learning<br><span class="cmap-sub">بيانات + تسميات (Class)</span></div>
    <div class="cmap-vline"></div>
    <div class="cmap-row cmap-row-2">
      <div class="cmap-node">Training Set<br><span class="cmap-sub">بناء y = f(x)</span></div>
      <div class="cmap-node">Test Set<br><span class="cmap-sub">تقييم التعميم</span></div>
    </div>
    <div class="cmap-vline"></div>
    <div class="cmap-row cmap-row-4">
      <div class="cmap-node cmap-sm">Decision Tree<br><span class="cmap-sub">ID3 · Gain</span></div>
      <div class="cmap-node cmap-sm">Naive Bayes<br><span class="cmap-sub">P(C|X)</span></div>
      <div class="cmap-node cmap-sm">Rule-Based</div>
      <div class="cmap-node cmap-sm">SVM<br><span class="cmap-sub">Hyperplane</span></div>
    </div>
    <div class="cmap-vline"></div>
    <div class="cmap-node cmap-hub">Confusion Matrix + Accuracy<br><span class="cmap-sub">TP · FP · TN · FN</span></div>
  </div>
  <div class="compare-grid" style="margin-top:1rem">
    <div class="compare-box right"><strong>تصنيف</strong>فئة (نعم/لا)</div>
    <div class="compare-box right"><strong>انحدار CH7</strong>رقم مستمر</div>
  </div>
</section>`,

    7: `
<section class="section cmap-section" id="map-chapter">
  <h2>🗺️ مخطط مفاهيمي — الفصل 7: السلاسل الزمنية والانحدار</h2>
  <div class="cmap">
    <div class="cmap-split">
      <div class="cmap-split-arm">
        <div class="cmap-arm-title">سلاسل زمنية TS</div>
        <div class="cmap-node cmap-sm">Trend + Seasonal + Noise</div>
        <div class="cmap-vline cmap-vline-short"></div>
        <div class="cmap-node cmap-sm">Smoothing · Moving Avg</div>
      </div>
      <div class="cmap-split-divider"></div>
      <div class="cmap-split-arm">
        <div class="cmap-arm-title">انحدار Regression</div>
        <div class="cmap-node cmap-sm">y = β₀ + β₁x + ε</div>
        <div class="cmap-vline cmap-vline-short"></div>
        <div class="cmap-node cmap-sm">Linear · Least Squares</div>
      </div>
    </div>
    <div class="cmap-vline"></div>
    <div class="cmap-node cmap-root">تنبؤ رقمي<br><span class="cmap-sub">قيمة مستقبلية / مبلغ / مبيعات</span></div>
    <div class="cmap-vline"></div>
    <div class="cmap-node">تقييم: MSE · R² · Residuals</div>
  </div>
</section>`,

    8: `
<section class="section cmap-section" id="map-chapter">
  <h2>🗺️ مخطط مفاهيمي — الفصل 8: العنقدة</h2>
  <div class="cmap">
    <div class="cmap-node cmap-root">Unsupervised<br><span class="cmap-sub">بدون تسميات — اكتشاف مجموعات</span></div>
    <div class="cmap-vline"></div>
    <div class="cmap-row cmap-row-2">
      <div class="cmap-node">Classification CH6<br><span class="cmap-sub">فئات معروفة</span></div>
      <div class="cmap-node cmap-primary">Clustering CH8<br><span class="cmap-sub">فئات مخفية</span></div>
    </div>
    <div class="cmap-vline"></div>
    <div class="cmap-node">مقاييس المسافة<br><span class="cmap-sub">Euclidean · Manhattan · Cosine</span></div>
    <div class="cmap-vline"></div>
    <div class="cmap-row cmap-row-3">
      <div class="cmap-node cmap-sm">K-Means<br><span class="cmap-sub">Centroid · Partitional</span></div>
      <div class="cmap-node cmap-sm">Hierarchical<br><span class="cmap-sub">Agglomerative · Dendrogram</span></div>
      <div class="cmap-node cmap-sm">DBSCAN<br><span class="cmap-sub">Density · Noise</span></div>
    </div>
    <div class="cmap-vline"></div>
    <div class="cmap-node">→ الفصل 9: عندما تكثر الأبعاد</div>
  </div>
</section>`,

    9: `
<section class="section cmap-section" id="map-chapter">
  <h2>🗺️ مخطط مفاهيمي — الفصل 9: العنقدة متعددة الأبعاد</h2>
  <div class="cmap">
    <div class="cmap-node cmap-root">CH8 في فضاء عالي الأبعاد<br><span class="cmap-sub">Curse of Dimensionality</span></div>
    <div class="cmap-vline"></div>
    <div class="cmap-node cmap-warn">المشكلة<br><span class="cmap-sub">المسافات تتشابه · Sparsity · Noise</span></div>
    <div class="cmap-vline"></div>
    <div class="cmap-node cmap-hub">Subspace Clustering<br><span class="cmap-sub">عنقود في أبعاد فرعية فقط</span></div>
    <div class="cmap-vline"></div>
    <div class="cmap-row cmap-row-3">
      <div class="cmap-node cmap-sm">CLIQUE<br><span class="cmap-sub">Grid · Dense Units</span></div>
      <div class="cmap-node cmap-sm">PROCLUS<br><span class="cmap-sub">Medoids · Projections</span></div>
      <div class="cmap-node cmap-sm">pcluster<br><span class="cmap-sub">Pattern-based</span></div>
    </div>
    <div class="cmap-vline"></div>
    <div class="cmap-row cmap-row-2">
      <div class="cmap-node cmap-sm">PCA — تقليل أبعاد</div>
      <div class="cmap-node cmap-sm">Sparse Data</div>
    </div>
  </div>
  <div class="note ok"><strong>الترابط:</strong> CH8 = أساس | CH9 = امتداد للبيانات عالية الأبعاد</div>
</section>`
  }
};

function getChapterConceptMap(chId) {
  return CONCEPT_MAPS.chapters[chId] || "";
}

function getConceptMapsPanelHTML(chId) {
  return getChapterConceptMap(chId) + CONCEPT_MAPS.courseHTML;
}
