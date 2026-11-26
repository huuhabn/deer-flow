import {
  CompassIcon,
  GraduationCapIcon,
  ImageIcon,
  MicroscopeIcon,
  PenLineIcon,
  ShapesIcon,
  SparklesIcon,
  VideoIcon,
} from "lucide-react";

import { bundledCopy } from "@/core/extensions/documentation";

import type { Translations } from "./types";

export const viVN: Translations = {
  sharing: {
    title: "Chia sẻ cuộc trò chuyện",
    description:
      "Ai có liên kết đều xem được bản chụp này mà không cần đăng nhập.",
    scope:
      "Gồm các bước trò chuyện đang hiện và các tệp kết quả đã trình bày. Thay đổi sau đó vẫn riêng tư. Thu hồi liên kết để chặn truy cập về sau; bản đã tải xuống hoặc đã sao chép vẫn ở với người nhận.",
    expiry: "Liên kết hết hạn sau",
    hour: "1 giờ",
    day: "1 ngày",
    week: "7 ngày",
    month: "30 ngày",
    create: "Tạo liên kết bản chụp",
    working: "Đang xử lý…",
    link: "Liên kết chia sẻ",
    copy: "Sao chép liên kết",
    copied: "Đã sao chép",
    links: "Liên kết đã tạo",
    noLinks: "Chưa có liên kết chia sẻ.",
    revoke: "Thu hồi",
    revoked: "Đã thu hồi",
    expired: "Đã hết hạn",
    expires: "Hết hạn",
    loading: "Đang tải…",
    failed: "Không thực hiện được yêu cầu này. Hãy thử lại.",
    unavailable: "Máy chủ này không hỗ trợ chia sẻ.",
    conflict:
      "Hãy hoàn tất lượt hiện tại trước khi chia sẻ. Nếu đã xong, hãy làm mới hoặc thu hồi liên kết cũ rồi thử lại.",
    tooLarge:
      "Cuộc trò chuyện này hoặc các tệp kết quả vượt quá giới hạn kích thước khi chia sẻ.",
    readOnly: "Bản chụp chỉ xem",
    fork: "Tiếp tục trong không gian của tôi",
    forking: "Đang sao chép…",
    missing: "Liên kết chia sẻ này đã hết hạn, đã bị thu hồi, hoặc không còn.",
    retry: "Thử lại",
    artifacts: "Tệp kết quả",
    download: "Tải xuống",
    preview: "Xem trước",
    close: "Đóng bản xem trước",
    you: "Người dùng",
    assistant: "Trợ lý",
    tool: "Kết quả công cụ",
    noPreview: "Hãy tải tệp này xuống để mở.",
    previewNote:
      "Bản xem trước tĩnh. Nội dung tương tác có thể cần tải tệp xuống.",
    previewLimited:
      "Bản xem trước chỉ gồm 512 KiB đầu. Hãy tải xuống để có đủ tệp.",
  },
  usage: {
    title: "Mức dùng token",
    description: "Xem token đầu vào, đầu ra và token trúng cache.",
    reportingNote:
      "Số liệu nhà cung cấp đã ghi nhận; lượt đang chạy và báo cáo còn thiếu có thể chưa đủ. Token trúng cache được tính vào token đầu vào.",
    period: "Khoảng thời gian",
    last7Days: "7 ngày qua",
    last30Days: "30 ngày qua",
    refresh: "Làm mới",
    tokens: "Tổng token",
    runs: "Lượt chạy",
    inputTokens: "Token đầu vào",
    outputTokens: "Token đầu ra",
    cachedTokens: "Token đầu vào trúng cache",
    daily: "Token dùng mỗi ngày",
    dailyDetails: "Xem chi tiết theo ngày",
    models: "Mức dùng theo mô hình",
    noUsage: "Chưa ghi nhận mức dùng trong khoảng này.",
    unknown: "Không rõ",
    timezoneNote: "Mỗi ngày tính theo lệch UTC hiện tại của trình duyệt.",
    date: "Ngày",
    model: "Mô hình",
    noModels: "Chưa ghi nhận mức dùng mô hình trong khoảng này.",
    noRuns: "Không có lượt chạy nào khớp bộ lọc.",
    recentRuns: "Lượt chạy gần đây",
    recentRunsHint:
      "Mọi ngày, mới nhất trước. Không phụ thuộc khoảng thời gian phía trên.",
    status: "Trạng thái lượt chạy",
    allStatuses: "Mọi trạng thái",
    pending: "Đang chờ",
    running: "Đang chạy",
    success: "Đã hoàn thành",
    error: "Thất bại",
    timeout: "Hết thời gian",
    interrupted: "Bị gián đoạn",
    cancelled: "Đã hủy",
    unknownStatus: "Trạng thái khác",
    previous: "Trang trước",
    next: "Trang sau",
    page: (page) => `Trang ${page}`,
    started: "Bắt đầu",
    duration: "Thời lượng",
    conversation: "Cuộc trò chuyện",
    untitled: "Cuộc trò chuyện chưa đặt tên",
    details: "Chi tiết lỗi",
    loadFailed: "Không tải được dữ liệu mức dùng. Hãy thử lại.",
    retry: "Thử lại",
    forbidden: "Bạn không có quyền xem mức dùng và các lượt chạy.",
    unavailable: "Máy chủ này không có báo cáo mức dùng.",
    databaseRequired:
      "Không có báo cáo mức dùng. Tính năng này cần cơ sở dữ liệu SQLite hoặc PostgreSQL. Hãy liên hệ quản trị viên nếu vẫn không được.",
    staticUnavailable: "Bản demo tĩnh không có báo cáo mức dùng.",
    loading: "Đang tải mức dùng…",
  },
  // Locale meta
  locale: {
    localName: "Tiếng Việt",
  },

  extensions: {
    title: "Phần mở rộng",
    navigation: "Phần mở rộng",
    search: "Tìm phần mở rộng theo tên hoặc mục đích",
    loading: "Đang tải phần mở rộng…",
    pageLoading: "Đang tải phần mở rộng…",
    unavailable: "Không dùng được phần mở rộng.",
    retry: "Thử lại",
    reload: "Tải lại",
    reloadAll: "Tải lại phần mở rộng (làm mới trang)",
    all: "Mọi phần mở rộng",
    notInstalled: "Phần mở rộng này chưa được cài.",
    enabledManaged: "Đã bật · Do quản trị viên quản lý",
    disabledManaged: "Đã tắt · Do quản trị viên quản lý",
    deploymentHint:
      "Giao diện và tính năng trên trình duyệt cập nhật khi bạn tải lại thủ công. Việc cài đặt, bật và cấu hình được quản lý qua cấu hình triển khai hoặc CLI.",
    moduleUnavailable: "Không có mô-đun trang",
    noResults: "Không có phần mở rộng khớp.",
    catalogEntry: "Phần mở rộng trong danh mục",
    catalogHint:
      "Mục này lấy từ danh mục phần mở rộng của kho mã. Hãy hỏi quản trị viên triển khai để xác nhận đã cài và đã bật chưa.",
    installationGuide: "Hướng dẫn cài đặt",
    detail: {
      guide: "Đọc hướng dẫn",
      gettingStarted: "Bắt đầu",
      requirements: "Trước khi bắt đầu",
      loaded: "Đã tải",
      loadedHint:
        "Phần mở rộng này đã được tải. Hãy làm theo hướng dẫn sử dụng để bắt đầu.",
      tools: "Công cụ đã đăng ký",
      pages: "Trang trong không gian làm việc",
      management: "Cách dùng và quản lý",
      readyHint: "Quản trị viên đã bật phần mở rộng này. Bạn có thể dùng ngay.",
      disabledHint: "Phần mở rộng này đang tắt. Hãy nhờ quản trị viên bật lại.",
      failedHint:
        "Không tải được trang phần mở rộng. Hãy làm mới danh sách rồi thử lại.",
      noPageHint:
        "Phần mở rộng này không có trang riêng. Hãy xem hướng dẫn để dùng trong cuộc trò chuyện hoặc tác vụ.",
      guideHint:
        "Đọc hướng dẫn để biết phần mở rộng này thêm gì vào DeerFlow và cách dùng.",
      technicalDetails: "Chi tiết kỹ thuật",
      package: "Gói",
      namespace: "Mã phần mở rộng",
      refresh: "Làm mới phần mở rộng",
      refreshHint:
        "Hãy làm mới trang sau khi quản trị viên cập nhật phần mở rộng.",
    },
    catalog: {
      officePreview: bundledCopy("deerflow-extension-office-preview", "vi-VN"),
      workspaceSearch: {
        title: "Tìm trong cuộc trò chuyện",
        description: "Tìm trong nội dung tin nhắn cũ và nhảy tới lượt khớp.",
      },
      agentTeams: bundledCopy("deerflow-extension-agent-teams", "vi-VN"),
      bookmarks: bundledCopy("deerflow-extension-bookmarks", "vi-VN"),
      context: bundledCopy("deerflow-extension-jev-context", "vi-VN"),
      classify: bundledCopy("deerflow-extension-jev-classify", "vi-VN"),
      screening: bundledCopy("deerflow-extension-jev-screening", "vi-VN"),
      workflows: bundledCopy("deerflow-extension-workflows", "vi-VN"),
      reportSections: bundledCopy(
        "deerflow-extension-report-sections",
        "vi-VN",
      ),
      retrieval: bundledCopy("deerflow-extension-retrieval", "vi-VN"),
      knowledge: bundledCopy("deerflow-extension-knowledge", "vi-VN"),
      knowledgeManagement: bundledCopy(
        "deerflow-extension-knowledge-management",
        "vi-VN",
      ),
      knowledgePlatform: bundledCopy(
        "deerflow-extension-knowledge-platform",
        "vi-VN",
      ),
      knowledgeCenter: bundledCopy(
        "deerflow-extension-knowledge-center",
        "vi-VN",
      ),
      skillEvolution: bundledCopy(
        "deerflow-extension-skill-evolution",
        "vi-VN",
      ),
      lightrag: bundledCopy("deerflow-extension-lightrag", "vi-VN"),
      runPostmortem: bundledCopy("deerflow-extension-run-postmortem", "vi-VN"),
      weknora: bundledCopy("deerflow-extension-weknora", "vi-VN"),
      example: bundledCopy("deerflow-extension-example", "vi-VN"),
    },
    pageUnavailable: "Không mở được trang phần mở rộng",
    pageUnavailableHint:
      "Trang này chưa được đăng ký, hoặc plugin của trang đang tắt hoặc không dùng được.",
    viewAll: "Xem phần mở rộng",
    viewFailed: "Không mở được khung plugin. Hãy tải lại rồi thử lại.",
    actionFailed:
      "Không thực hiện được thao tác của phần mở rộng. Hãy thử lại.",
    view: (name) => `Xem ${name}`,
    open: (name) => `Mở ${name}`,
  },

  capabilities: {
    toolsAndIntegrations: "Công cụ và tích hợp",
    mcpConnections: {
      title: "Kết nối MCP của tôi",
      action: (action, name) => `${action} ${name}`,
      disconnect: "Ngắt kết nối",
      reconnect: "Kết nối lại",
      actionFailed: "Không đổi được kết nối. Hãy thử lại.",
      loadFailed: "Không tải được các kết nối MCP của bạn.",
      status: {
        disconnected: "Chưa kết nối",
        connected: "Đã kết nối",
        reconnect_required: "Hãy kết nối lại để dùng máy chủ này.",
        removed: "Máy chủ này không còn cho phép người dùng ủy quyền.",
        unavailable: "Không kết nối được. Hãy liên hệ quản trị viên.",
      },
    },
    icon: {
      title: "Biểu tượng plugin",
      upload: "Tải biểu tượng plugin lên",
      change: "Chọn ảnh",
      reset: "Khôi phục mặc định",
      hint: "PNG, JPG hoặc WebP · tối đa 2 MB. Thay đổi có hiệu lực khi bạn lưu.",
      singleServer: "Chỉ tải biểu tượng khi thêm từng plugin một.",
      errors: {
        type: "Hãy chọn ảnh PNG, JPG hoặc WebP.",
        size: "Ảnh phải từ 2 MB trở xuống.",
        invalid:
          "Không đọc được ảnh này. Hãy chọn ảnh hợp lệ, tối đa 16 megapixel.",
      },
    },
    directory: {
      categories: {
        office: "Văn phòng và cộng tác",
        knowledge: "Tài liệu và tri thức",
        research: "Tìm kiếm và nghiên cứu",
        business: "Kinh doanh và dữ liệu",
        development: "Phát triển và vận hành",
        custom: "Plugin tùy chỉnh",
      },
      hints: {
        office: "Giữ cả nhóm cùng nhịp",
        knowledge: "Mở tri thức của tổ chức cho mọi người",
        research: "Tìm nguồn và biến thành nhận định",
        business: "Đưa bối cảnh kinh doanh vào từng quyết định",
        development: "Nối các công cụ nhóm đang dùng để xây dựng",
        custom: "Các máy chủ MCP bạn đã cấu hình",
      },
      connected: "Đã kết nối",
      native: "Hỗ trợ sẵn",
      guide: "Hướng dẫn thiết lập",
      candidate: "Gợi ý",
      view: "Xem",
      allCategories: "Mọi danh mục",
      source: "Mở tài liệu thiết lập",
      setup: "Cách kết nối",
      notice:
        "Khám phá tích hợp cho nhóm. Hãy kết nối tài khoản và cấu hình quyền khi bạn cần.",
      configured: "Đã cấu hình",
      nativeHint: "DeerFlow hỗ trợ · cần cấu hình khi triển khai",
      guideHint: "Tài liệu tham khảo · chưa kết nối",
      unknownStatus: "Không rõ trạng thái",
      notConnected: "Chưa kết nối",
    },
    integrationSkills: "Từ plugin",
    sharedSkills: "Kỹ năng dùng chung",
    title: "Trung tâm năng lực",
    description:
      "Thêm công cụ và kỹ năng để DeerFlow làm việc theo cách của bạn.",
    plugins: "Plugin",
    skills: "Kỹ năng",
    searchPlugins: "Tìm plugin theo tên hoặc mục đích",
    searchSkills: "Tìm kỹ năng theo tên hoặc mục đích",
    allPlugins: "Mọi plugin",
    installed: "Đã cài",
    enabled: "Đã bật",
    disabled: "Đã tắt",
    configure: "Cấu hình",
    details: "Xem chi tiết",
    addPlugin: "Thêm plugin MCP",
    builtin: "Tích hợp sẵn",
    community: "Cộng đồng",
    custom: "Kỹ năng của tôi",
    allSkills: "Mọi kỹ năng",
    availablePlugins: "Plugin có sẵn",
    availableSkills: "Kỹ năng có sẵn",
    pluginHint:
      "Kết nối ứng dụng hằng ngày để agent lấy thông tin và hoàn thành việc.",
    skillHint:
      "Biến cách làm hữu ích thành kỹ năng, dùng được trong mọi cuộc trò chuyện.",
    noResults: "Không tìm thấy kết quả khớp",
    larkName: "Lark / Feishu",
    larkDescription:
      "Làm việc với tài liệu, tin nhắn, lịch và bảng đa chiều ngay trong cuộc trò chuyện.",
    larkTag: "Cộng tác",
    connect: "Kết nối",
    notInstalled: "Chưa cài",
    mcpDescription: "Để agent dùng các công cụ của plugin này.",
    mcpLabel: "Plugin MCP",
    pluginSettings: "Cài đặt plugin",
    communityTitle: "Mang một kỹ năng từ cộng đồng vào",
    communityDescription:
      "Nhập tệp .skill để quản lý và dùng trong Kỹ năng của tôi.",
    skillEnabled: "Bật kỹ năng",
    manage: "Quản lý",
  },

  // Common
  common: {
    home: "Trang chủ",
    settings: "Cài đặt",
    delete: "Xóa",
    edit: "Sửa",
    rename: "Đổi tên",
    renameFailed: "Không đổi tên được cuộc trò chuyện.",
    share: "Chia sẻ",
    openInNewWindow: "Mở trong cửa sổ mới",
    close: "Đóng",
    more: "Thêm",
    search: "Tìm kiếm",
    loadMore: "Tải thêm",
    scrollToBottom: "Xuống cuối",
    showingOf: (loaded, total) => `Đang hiện ${loaded}/${total}`,
    download: "Tải xuống",
    thinking: "Đang suy nghĩ",
    artifacts: "Tệp kết quả",
    public: "Công khai",
    custom: "Tùy chỉnh",
    notAvailableInDemoMode: "Không có trong chế độ demo",
    loading: "Đang tải...",
    error: "Lỗi:",
    version: "Phiên bản",
    lastUpdated: "Cập nhật lần cuối",
    code: "Mã",
    preview: "Xem trước",
    cancel: "Hủy",
    save: "Lưu",
    install: "Cài đặt",
    create: "Tạo",
    import: "Nhập",
    export: "Xuất",
    exportAsMarkdown: "Xuất Markdown",
    exportAsJSON: "Xuất JSON",
    exportSuccess: "Đã xuất cuộc trò chuyện",
    exportFailed: "Không xuất được cuộc trò chuyện.",
    regenerate: "Tạo lại",
    editAndRerun: "Sửa và chạy lại",
    updateAndRerun: "Cập nhật và chạy lại",
    editRerunWarning:
      "Chạy lại chỉ khôi phục trạng thái cuộc trò chuyện. Tệp, bộ nhớ và thao tác bên ngoài không bị hoàn tác.",
    branch: "Tách nhánh cuộc trò chuyện",
    showArtifacts: "Hiện tệp kết quả của cuộc trò chuyện này",
    browser: "Trình duyệt",
    showBrowser: "Mở bảng trình duyệt",
  },

  browserStream: {
    connecting: "Đang kết nối…",
    disconnected: "Đã ngắt kết nối",
    handshakeTimeout:
      "Kết nối trình duyệt trực tiếp bị quá giờ. Hãy kiểm tra mạng hoặc proxy, rồi tắt và bật lại Live để thử lại.",
    connectionFailed:
      "Kết nối trình duyệt trực tiếp thất bại hoặc đã đóng. Hãy kiểm tra kết nối và quyền truy cập, rồi tắt và bật lại Live để thử lại.",
  },

  skillUsage: {
    used: "Kỹ năng đã dùng",
    title: "Kỹ năng",
    name: "Tên",
    description: "Mô tả",
    builtIn: "Tích hợp sẵn",
    custom: "Tùy chỉnh",
    integration: "Tích hợp",
    legacy: "Cũ",
    copy: "Sao chép bản chụp kỹ năng",
    partial:
      "Đây là một phần hướng dẫn kỹ năng đã được tải trong lượt chạy này.",
  },

  runDuration: {
    reasoning: "Suy luận",
    working: "Đang xử lý…",
    completedIn: (duration) => `Mất ${duration}`,
    description:
      "Tổng thời gian tác vụ, gồm suy luận của mô hình, lệnh gọi công cụ và thời gian chờ.",
    lessThanSecond: "<1 giây",
    hours: (value) => `${value} giờ`,
    minutes: (value) => `${value} phút`,
    seconds: (value) => `${value} giây`,
    separator: " ",
  },

  // Home
  home: {
    docs: "Tài liệu",
    blog: "Blog",
    searchDocs: "Tìm trong tài liệu…",
    searchDocsLabel: "Tìm tài liệu",
    searchNoResults: "Không có kết quả. Hãy thử ít từ hơn hoặc từ khác.",
    searchLoadFailed: "Hiện không tìm kiếm được.",
    searchLoading: "Đang tải…",
  },

  // Welcome
  welcome: {
    greeting: "Chào bạn!",
    description:
      "Chào mừng đến với 🦌 DeerFlow, một super agent mã nguồn mở. Với kỹ năng có sẵn và kỹ năng riêng, DeerFlow giúp bạn tìm trên web, phân tích dữ liệu, tạo tệp kết quả như trang trình bày, trang web, và gần như mọi việc khác.",

    createYourOwnSkill: "Tạo kỹ năng của riêng bạn",
    createYourOwnSkillDescription:
      "Tạo kỹ năng riêng để khai thác DeerFlow. Với kỹ năng tùy chỉnh,\nDeerFlow có thể giúp bạn tìm trên web, phân tích dữ liệu và tạo\n tệp kết quả như trang trình bày, trang web, và gần như mọi việc khác.",
  },

  // Clipboard
  clipboard: {
    copyToClipboard: "Sao chép",
    copiedToClipboard: "Đã sao chép",
    failedToCopyToClipboard: "Không sao chép được",
    linkCopied: "Đã sao chép liên kết",
  },

  artifactSelection: {
    rewrite: "Viết lại phần chọn",
    instructions:
      "Mô tả thay đổi, rồi chọn Viết lại phần chọn. Muốn hỏi bình thường, hãy dùng Gửi.",
    exactRequired: "Chuyển sang mã nguồn để chọn đúng đoạn cần viết lại.",
    review: "Xem lại phần thay",
    original: "Đoạn đã chọn",
    replacement: "Nội dung thay",
    apply: "Áp dụng vào bản nháp",
    applied:
      "Đã thay đoạn chọn trong bản nháp. Hãy xem lại và lưu tệp kết quả.",
    changed: "Tệp hoặc bản nháp đã đổi. Hãy chọn lại đoạn.",
    limit: "Chọn tối đa 12.000 ký tự.",
  },

  artifactEditing: {
    unsaved: "Chưa lưu",
    saving: "Đang lưu...",
    saved: "Đã lưu tệp kết quả",
    exit: "Thoát chỉnh sửa",
    discard: "Bỏ thay đổi",
    discardChanges: "Bỏ các thay đổi chưa lưu của tệp kết quả này?",
    conflict:
      "Tệp kết quả này đã đổi sau khi bạn bắt đầu sửa. Hãy bỏ bản nháp và tải lại trước khi lưu.",
    conflictShort: "Đã đổi từ nơi khác",
    runInProgress: "Hãy đợi lượt chạy của agent kết thúc rồi mới lưu.",
    saveFailed: "Không lưu được tệp kết quả",
  },

  artifactPreview: {
    preparingDownload: "Đang chuẩn bị tải xuống…",
    retryDownload: "Tải lại",
    downloadFailed: "Tải xuống thất bại. Hãy thử lại.",
    downloadRequested: "Đã gửi tới mục tải xuống của trình duyệt",
    retry: "Xem trước lại",
    unavailable: "Định dạng này không xem trước được. Hãy tải tệp gốc để xem.",
    loadingPreview: "Đang chuẩn bị bản xem trước...",
    resourcesUnavailable:
      "Một số tài nguyên xem trước không tải được. Hãy xem mã nguồn hoặc tải tệp để có đủ nội dung.",
    limited: (previewSize, totalSize) =>
      totalSize
        ? `Đang hiện ${previewSize} đầu trong ${totalSize}.`
        : `Đang hiện ${previewSize} đầu.`,
    loadFullFile: "Tải đủ tệp",
    loadingFullFile: "Đang tải đủ tệp...",
    previewFailed: "Không xem trước được tệp này. Bạn vẫn có thể tải xuống.",
    viewSource: "Xem mã nguồn",
    missingTarget: "Liên kết này không chỉ tệp kết quả cần hiện.",
  },

  artifactTable: {
    title: "Xem trước bảng",
    header: "Dòng đầu là tiêu đề cột",
    column: (index) => `Cột ${index}`,
    total: (count) => `${count} dòng`,
    sample: (count) => `Xem trước ${count} dòng đầu`,
    range: (start, end, limited) =>
      `${start}–${end}${limited ? " của bản xem trước" : ""}`,
    columnsLimited: "Đang hiện 50 cột đầu của bản xem trước.",
    uneven: "Một số dòng có số trường khác nhau. Trường thiếu được đánh dấu.",
    empty: "Tệp này trống.",
    incomplete:
      "Không có bản ghi nào đủ để nằm trong bản xem trước. Hãy xem mã nguồn hoặc tải tệp xuống.",
    failed:
      "Không xem trước bảng này một cách đáng tin. Hãy xem mã nguồn hoặc tải tệp xuống.",
    retry: "Xem trước lại",
    previous: "Trang trước",
    next: "Trang sau",
    cell: (row, column) => `Xem ô: dòng ${row}, cột ${column}`,
    cellValue: "Giá trị ô",
    missing: "Thiếu",
    savedVersion: "Mở hoặc tải tệp đã lưu. Bản nháp của bạn chưa được lưu.",
  },

  artifactArchive: {
    downloadCurrent: (count) => `Tải phiên bản hiện tại (${count} tệp)`,
    currentVersionNotice:
      "Danh sách tệp lấy từ câu trả lời này. Nội dung là phiên bản hiện tại và có thể đã đổi.",
    downloadFailed: "Không tải được gói tệp kết quả.",
  },

  modelPicker: {
    search: "Tìm mô hình…",
    provider: "Nhà cung cấp",
    allProviders: "Mọi nhà cung cấp",
    noResults: "Không có mô hình khớp",
    recent: "Dùng gần đây",

    title: "Chọn mô hình",
    favorites: "Yêu thích",
    otherModels: "Mô hình khác",
    noModels: "Không có mô hình",
    favoriteModel: (displayName, name) =>
      `Đánh dấu yêu thích ${displayName} (${name})`,
    sessionOnly: "Mục yêu thích chỉ được lưu trong phiên này.",
  },

  // Citations
  citations: {
    viewKnowledgeSource: (title: string) => `Xem nguồn: ${title}`,
    sourcePages: (pages: string) => `Trang ${pages}`,
    retrievedExcerpt:
      "Căn cứ được ghi khi câu trả lời này được tra cứu. Tài liệu nguồn có thể đã đổi từ lúc đó.",
    excerptTruncated: "Đoạn trích đã được rút ngắn cho vừa giới hạn truy xuất.",
    sourceUnavailable: "Không có căn cứ nguồn trong cuộc trò chuyện đã tải.",
    knowledgeSourcesSummary: (count: number) => `${count} nguồn tri thức`,
    sourcesSummary: (count) => `Đã dùng ${count} nguồn`,
    citeCount: (count) => `${count} trích dẫn`,
    copyReference: (title) => `Sao chép nguồn ${title}`,
    copiedReference: (title) => `Đã sao chép nguồn ${title}`,
  },

  // Workspace Changes
  workspaceChanges: {
    title: "Thay đổi trong không gian làm việc",
    editedTitle: (count) => `Đã sửa ${count} tệp`,
    badge: (count, additions, deletions) =>
      `${count} tệp đã đổi +${additions} -${deletions}`,
    viewChanges: "Xem thay đổi",
    created: "Đã tạo",
    modified: "Đã sửa",
    deleted: "Đã xóa",
    openFile: "Mở tệp",
    loading: "Đang tải thay đổi...",
    noChanges: "Chưa ghi nhận thay đổi nào.",
    diffUnavailable: "Không có phần khác biệt",
    binaryUnavailable: "Tệp nhị phân. Không hiện phần khác biệt.",
    largeUnavailable: "Tệp lớn. Đã bỏ phần khác biệt.",
    sensitiveUnavailable: "Đường dẫn nhạy cảm. Đã ẩn nội dung.",
    truncatedUnavailable: "Đã bỏ phần khác biệt vì tập thay đổi quá lớn.",
    symlinkUnavailable:
      "Thay đổi liên kết tượng trưng. Không hiện phần khác biệt.",
    truncatedSummary: "Một số thay đổi đã bị cắt bớt.",
  },

  // Input Box
  inputBox: {
    mentionPicker: "Thêm một tham chiếu",
    mentionSearch: "Tìm kỹ năng, tệp dự án, cuộc trò chuyện và plugin",
    mentionSkills: "Kỹ năng",
    mentionFiles: "Tệp dự án",
    mentionExtensions: "Plugin",
    mentionExtensionsLimit: "Chọn tối đa 16 tham chiếu plugin.",
    mentionConversations: "Cuộc trò chuyện",
    mentionUpload: "Tải một tệp lên",
    mentionEmpty: "Không có tham chiếu khớp trong kết quả đã tải",
    mentionLoadMore: "Tải thêm",
    mentionLoading: "Đang tải tham chiếu…",
    mentionFailed: "Không tải được tham chiếu. Hãy thử lại.",
    mentionRetry: "Thử lại",
    mentionAttaching: "Đang thêm tệp…",
    mentionAttachFailed: "Không thêm được tệp này. Hãy thử lại.",
    mentionMultipleSkills:
      "Mỗi tin nhắn chọn tối đa 16 kỹ năng; chọn lại kỹ năng đã đánh dấu để bỏ.",
    mentionNoProject:
      "Hãy mở cuộc trò chuyện của dự án để tham chiếu tài liệu.",
    mentionUnavailable: "Không có tệp",
    mentionClose: "Đóng tham chiếu",

    placeholder: "Hôm nay tôi có thể giúp gì cho bạn?",
    disclaimer: "DeerFlow là AI và có thể nhầm",
    createSkillPrompt:
      "Chúng ta sẽ tạo một kỹ năng mới từng bước với `skill-creator`. Trước hết, bạn muốn kỹ năng này làm gì?",
    addAttachments: "Thêm tệp đính kèm",
    referenceConversations: "Tham chiếu một cuộc trò chuyện",
    referenceConversationsSearch: "Tìm cuộc trò chuyện",
    referenceConversationsEmpty: "Không tìm thấy cuộc trò chuyện",
    referenceConversationsLimit: (max: number) =>
      `Tối đa ${max} cuộc trò chuyện mỗi tin nhắn`,
    referenceConversationsRemove: (title: string) =>
      `Bỏ tham chiếu tới ${title}`,
    referencedConversations: "Cuộc trò chuyện được tham chiếu",
    removeProjectAttachment: "Bỏ tài liệu đính kèm",
    inputPolish: "Chỉnh câu chữ",
    inputPolishing: "Đang chỉnh câu chữ...",
    inputPolishNoChanges: "Câu này đã rõ.",
    inputPolishFailed: "Không chỉnh được câu chữ.",
    inputPolishUndo: "Hoàn tác chỉnh câu",
    inputPolishCancel: "Hủy chỉnh câu",
    voiceInputStartLabel: "Nhập bằng giọng nói",
    voiceInputStopLabel: "Dừng nhập giọng nói",
    voiceInputStart:
      "Ghi âm và gửi tới dịch vụ chuyển giọng nói thành chữ đã cấu hình.",
    voiceInputStop: "Dừng nhập giọng nói",
    voiceInputListening: "Đang ghi… Kết thúc để xem lại hoặc chỉnh câu.",
    voiceInputStarting: "Đang chờ micro…",
    voiceInputFinishing: "Đang chuyển giọng nói thành chữ…",
    voiceInputCancel: "Hủy nhập giọng nói",
    voiceInputUnsupported:
      "Ghi âm cần HTTPS (hoặc localhost) và trình duyệt hỗ trợ micro.",
    voiceInputPermissionDenied:
      "Quyền micro bị từ chối. Hãy cho phép micro rồi thử lại.",
    voiceInputMicrophoneUnavailable:
      "Không thấy micro. Hãy kiểm tra thiết bị đầu vào rồi thử lại.",
    voiceInputTooLarge:
      "Bản ghi vượt giới hạn kích thước. Hãy thử bản ngắn hơn.",
    voiceInputUnavailable:
      "Nhập giọng nói không còn được bật. Bản nháp của bạn vẫn được giữ.",
    voiceInputNoSpeech: "Không nghe thấy tiếng nói. Hãy thử lại.",
    voiceInputFailed: "Nhập giọng nói thất bại. Hãy thử lại.",
    mode: "Chế độ",
    flashMode: "Flash",
    flashModeDescription: "Nhanh và gọn, nhưng có thể chưa chính xác",
    reasoningMode: "Suy luận",
    reasoningModeDescription:
      "Suy luận trước khi làm, cân bằng giữa thời gian và độ chính xác",
    proMode: "Pro",
    proModeDescription:
      "Suy luận, lập kế hoạch rồi thực hiện, kết quả chính xác hơn, có thể lâu hơn",
    ultraMode: "Ultra",
    ultraModeDescription:
      "Chế độ Pro kèm subagent để chia việc; hợp với tác vụ nhiều bước, phức tạp",
    reasoningEffort: "Mức suy luận",
    reasoningEffortMinimal: "Tối thiểu",
    reasoningEffortMinimalDescription: "Tra cứu rồi trả lời thẳng",
    reasoningEffortLow: "Thấp",
    reasoningEffortLowDescription: "Kiểm tra logic đơn giản, suy diễn nông",
    reasoningEffortMedium: "Trung bình",
    reasoningEffortMediumDescription:
      "Phân tích logic nhiều tầng và kiểm chứng cơ bản",
    reasoningEffortHigh: "Cao",
    reasoningEffortHighDescription:
      "Suy diễn toàn diện, kiểm chứng nhiều hướng và đối chiếu ngược",
    reasoningEffortXhigh: "Rất cao",
    reasoningEffortXhighDescription:
      "Suy diễn rộng hơn mức Cao; chậm nhất và kỹ nhất",
    reasoningEffortMax: "Tối đa",
    reasoningEffortMaxDescription:
      "Ngân sách suy luận sâu nhất của nhà cung cấp",
    surpriseMe: "Bất ngờ",
    surpriseMePrompt: "Làm tôi bất ngờ",
    followupLoading: "Đang tạo câu hỏi tiếp theo...",
    followupConfirmTitle: "Gửi gợi ý?",
    followupConfirmDescription: "Ô nhập đã có chữ. Hãy chọn cách gửi.",
    followupConfirmAppend: "Nối thêm rồi gửi",
    followupConfirmReplace: "Thay rồi gửi",
    suggestionPlaceholderRequired:
      "Hãy thay chỗ giữ chỗ trong gợi ý trước khi gửi.",
    goalCommandDescription: "Đặt, xem hoặc xóa mục tiêu đang hoạt động",
    compactCommandDescription:
      "Nén ngữ cảnh trước đó, vẫn giữ nguyên cuộc trò chuyện trên màn hình",
    goalLabel: "Mục tiêu",
    goalContinuing: "Đang tiếp tục {count}/{max}",
    goalContinuationTooltip:
      "Đã tự tiếp tục {count}/{max} lần hướng tới mục tiêu; dừng khi chạm giới hạn.",
    goalSet: "Đã đặt mục tiêu.",
    goalCleared: "Đã xóa mục tiêu.",
    goalNone: "Không có mục tiêu đang hoạt động.",
    goalActive: "Mục tiêu đang hoạt động: {goal}",
    goalFailed: "Lệnh mục tiêu thất bại.",
    goalTooLong: "Mục tiêu quá dài. Hãy giữ dưới {max} ký tự.",
    goalLengthCounter: "Độ dài mục tiêu: {length}/{max} ký tự",
    goalBar: {
      regionLabel: "Trạng thái mục tiêu",
      inProgress: "Đang thực hiện",
      stopped: "Đã dừng",
      waitingForYou: "Đang chờ bạn",
      waiting: "Đang chờ",
      paused: "Đã tạm dừng",
      waitingApproval: "Đang chờ phê duyệt",
      autoContinuedOnce: "Đã tự tiếp tục một lần",
      autoContinuedMany: "Đã tự tiếp tục {count} lần",
      details: "Chi tiết",
      hideDetails: "Ẩn chi tiết",
      noteLabel: "Ghi chú kiểm tra mục tiêu (từ bộ kiểm tra)",
      codeLabel: "Mã dừng",
      assumptionTooltip:
        "Agent đã tự điền phần mục tiêu không nói rõ, và đã nói điều đó trong câu trả lời. Hãy xem câu trả lời phía trên.",
      announce: "{status}: {detail}",
      editLocked:
        "Không sửa được khi đang có mục tiêu. Chạy /goal clear để sửa.",
      busy: "Cuộc trò chuyện này vẫn còn một lượt đang chạy. Hãy thử lại khi xong.",
      next: {
        limit:
          "Đã chạm giới hạn tiếp tục · {count}/{max}. Sẽ không tự tiếp tục nữa. Hãy trả lời để đi tiếp, hoặc đặt lại mục tiêu bằng /goal <điều kiện> để đếm lại từ đầu (việc này cũng bắt đầu một lượt chạy mới).",
        autoOff:
          "Kiểm tra mục tiêu: chưa đạt. Mục tiêu này không tự tiếp tục. Hãy trả lời để đi tiếp.",
        noProgress:
          "Các lượt không có tiến triển. Hãy trả lời phần còn thiếu, hoặc diễn đạt lại mục tiêu bằng /goal.",
        tokenCapped:
          "Đã chạm ngân sách token. Hãy gửi tin nhắn để tiếp tục; lượt mới bắt đầu với ngân sách mới.",
        loopCapped:
          "Các lệnh gọi công cụ lặp lại đã kích hoạt điểm dừng an toàn. Hãy đổi cách làm và gửi tin nhắn mới để thử lại; mục tiêu vẫn còn.",
        recursionCapped:
          "Lượt chạy chạm giới hạn số bước trước khi xong. Hãy gửi tin nhắn mới để tiếp tục; mục tiêu vẫn còn.",
        missingEvidence:
          "Kiểm tra mục tiêu: thiếu căn cứ. Hãy yêu cầu trình bày kết quả hoặc giải thích phần còn thiếu; nếu mục tiêu không còn đúng, hãy chạy /goal clear.",
        runFailed:
          "Kiểm tra mục tiêu: lượt chạy chưa làm xong việc. Hãy xem lỗi trong câu trả lời, rồi gửi tin nhắn để thử lại.",
        needsInputCard: "Hãy trả lời câu hỏi phía trên để tiếp tục.",
        needsInputReply: "Hãy trả lời phần còn thiếu để tiếp tục.",
        needsApproval: "Hãy xem phê duyệt công cụ phía trên để tiếp tục.",
        needsApprovalReload:
          "Không tải được chi tiết phê duyệt. Hãy dùng bảng lỗi tải lại phía trên để thử lại.",
        external:
          "Kiểm tra mục tiêu: đang chờ một việc bên ngoài. Hãy gửi tin nhắn khi đã sẵn sàng.",
        unchecked: "{reason}. Sẽ kiểm tra lại sau tin nhắn tiếp theo của bạn.",
        unknown: "Hãy gửi tin nhắn để đi tiếp.",
        paused:
          "Đã tự tiếp tục {count}/{max}. Lượt chạy kết thúc trước khi mục tiêu được xác nhận. Hãy gửi tin nhắn để kiểm tra lại.",
      },
      uncheckedReasons: {
        evaluatorFailed: "Bản thân lượt chạy có thể vẫn ổn",
        noDurableEndOfTurn: "Không lưu được câu trả lời cuối",
        threadChanged: "Cuộc trò chuyện thay đổi trong lúc kiểm tra",
      },
    },
    compactSuccess:
      "Đã nén ngữ cảnh trước đó. Cuộc trò chuyện đầy đủ vẫn hiện; các lần gọi mô hình sau sẽ dùng bản tóm tắt và các tin nhắn gần đây.",
    compactSkipped: "Ngữ cảnh hiện tại chưa cần nén.",
    compactFailed: "Nén ngữ cảnh thất bại.",
    suggestions: [
      {
        suggestion: "Viết",
        prompt: "Viết một bài blog về xu hướng mới nhất của [chủ đề]",
        icon: PenLineIcon,
      },
      {
        suggestion: "Nghiên cứu",
        prompt: "Nghiên cứu sâu về [chủ đề], rồi tóm tắt những gì tìm được.",
        icon: MicroscopeIcon,
      },
      {
        suggestion: "Thu thập",
        prompt: "Thu thập dữ liệu từ [nguồn] và lập một báo cáo.",
        icon: ShapesIcon,
      },
      {
        suggestion: "Học",
        prompt: "Tìm hiểu về [chủ đề] và soạn một bài hướng dẫn.",
        icon: GraduationCapIcon,
      },
    ],
    suggestionsCreate: [
      {
        suggestion: "Trang web",
        prompt: "Tạo một trang web về [chủ đề]",
        icon: CompassIcon,
      },
      {
        suggestion: "Ảnh",
        prompt: "Tạo một ảnh về [chủ đề]",
        icon: ImageIcon,
      },
      {
        suggestion: "Video",
        prompt: "Tạo một video về [chủ đề]",
        icon: VideoIcon,
      },
      {
        type: "separator",
      },
      {
        suggestion: "Kỹ năng",
        prompt:
          "Chúng ta sẽ tạo một kỹ năng mới từng bước với `skill-creator`. Trước hết, bạn muốn kỹ năng này làm gì?",
        icon: SparklesIcon,
      },
    ],
    pleaseWaitStreaming: "Hãy đợi câu trả lời hiện tại kết thúc.",
    send: "Gửi",
    runInputMode: "Gửi trong lúc đang làm",
    queueMode: "Xếp hàng",
    steerMode: "Điều chỉnh",
    queueModeHelp: "Chạy sau khi tác vụ hiện tại xong",
    steerModeHelp: "Điều chỉnh tác vụ hiện tại ở điểm gần nhất có thể",
    runInputSend: "Gửi cập nhật",
    runInputTextOnly:
      "Gửi chữ thường trong lúc tác vụ đang chạy. Tệp đính kèm và lệnh gạch chéo gửi được khi tác vụ xong.",
    runInputUnavailable:
      "Tin nhắn chưa được xác nhận. Hãy xem trạng thái tác vụ rồi thử lại; bản nháp vẫn được giữ.",
    stopRun: "Dừng tác vụ hiện tại",
    runInputQueued: "Đã xếp hàng",
    runInputSteering: "Đang chờ áp dụng",
    runInputUnapplied: "Chưa áp dụng trong lượt này",
    runInputRetry: "Gửi lại",
    runInputCancel: "Bỏ tin nhắn này",
    runInputDispatching: "Đang chờ xác nhận",
    runInputReplayUnavailable:
      "Lượt chạy này đã được điều chỉnh khi đang làm. Hãy gửi tin nhắn mới để tiếp tục, thay vì phát lại một phần.",
    stopStreamingUnavailable: "Vai trò của bạn không được dừng lượt đang chạy.",
    startTurnUnavailable: "Vai trò của bạn không được bắt đầu lượt mới.",
  },

  // Sidebar
  sidebar: {
    newChat: "Cuộc trò chuyện mới",
    chats: "Cuộc trò chuyện",
    channels: "Kênh",
    recentChats: "Gần đây",
    demoChats: "Cuộc trò chuyện demo",
    agents: "Agent",
    scheduledTasks: "Tác vụ theo lịch",
    agentsDisabledTooltip: "Tính năng chưa được bật",
  },

  // Knowledge scope for custom-agent chat
  knowledge: {
    scope: {
      title: "Phạm vi tri thức",
      description:
        "Chọn kho tri thức và tài liệu được phép mà agent này có thể tìm.",
      buttonAll: "Tri thức · Tất cả",
      buttonDisabled: "Tri thức · Tắt",
      buttonDatasets: (datasets) => `Tri thức · ${datasets} kho`,
      buttonDatasetsAndDocuments: (datasets, documents) =>
        `Tri thức · ${datasets} kho · ${documents} tệp`,
      allDatasets: "Mọi kho tri thức được phép",
      selectedDatasets: "Kho tri thức đã chọn",
      disabled: "Tắt",
      allDocuments: "Mọi tệp có thể tìm",
      selectedDocuments: "Tệp đã chọn",
      searchDatasets: "Tìm kho tri thức",
      searchDocuments: "Tìm tệp",
      selectedCount: (count) => `Đã chọn ${count}`,
      files: "Tệp",
      notSearchable: "Không tìm được",
      loadFailed: "Không tải được danh mục. Lựa chọn hiện tại không đổi.",
      selectionInvalid: "Lựa chọn này vượt giới hạn kích thước được hỗ trợ.",
      previous: "Trước",
      next: "Sau",
      agentUnavailable: "Agent này không được dùng nhóm công cụ tri thức.",
      apply: "Áp dụng",
      historyAll: "Tri thức: mọi kho được phép",
      historyDisabled: "Tri thức: tắt",
      historySelected: (datasets, documents) =>
        documents > 0
          ? `Tri thức: ${datasets} kho, ${documents} tệp`
          : `Tri thức: ${datasets} kho`,
    },
  },
  // Sidebar projects section
  projects: {
    title: "Dự án",
    newProject: "Dự án mới",
    namePlaceholder: "Tên dự án",
    moveToProject: "Chuyển vào dự án",
    moveToProjectHint:
      "Chuyển cuộc trò chuyện không xóa nội dung đã có trong đó.",
    removeFromProject: "Bỏ khỏi dự án",
    archive: "Lưu trữ",
    restore: "Khôi phục",
    deleteProject: "Xóa dự án",
    deleteProjectConfirm:
      "Xóa dự án này chỉ gỡ liên kết các cuộc trò chuyện; cuộc trò chuyện, lịch sử và tệp không bị xóa. Tài liệu trên kệ chuyển vào thùng rác và vẫn khôi phục được trong thời gian lưu.",
    archived: "Đã lưu trữ",
    empty: "Dự án này chưa có cuộc trò chuyện.",
    newChat: "Cuộc trò chuyện mới",
    create: "Tạo",
    createFailed: "Không tạo được dự án",
    moveFailed: "Không chuyển được cuộc trò chuyện",
    archiveFailed: "Không lưu trữ được dự án",
    restoreFailed: "Không khôi phục được dự án",
    deleteFailed: "Không xóa được dự án",
    switchToGrouped: "Nhóm cuộc trò chuyện theo dự án",
    switchToFlat: "Hiện danh sách phẳng",
    threads: "Cuộc trò chuyện",
    threadsLoadFailed: "Không tải được cuộc trò chuyện của dự án",
    untitled: "Chưa đặt tên",
    settings: "Cài đặt",
    notFound: "Không tìm thấy dự án hoặc dự án đã bị xóa.",
    projectUnavailable:
      "Không gắn được cuộc trò chuyện vào dự án. Tin nhắn chưa được gửi — hãy thử lại.",
    documents: "Tài liệu",
    documentsEmptyTitle: "Chưa có tài liệu",
    documentsEmptyHint:
      "Tải tệp lên hoặc lưu tệp từ cuộc trò chuyện để dựng kệ của dự án này.",
    instructions: "Hướng dẫn",
    instructionsPlaceholder:
      "Bối cảnh, mục tiêu và quy ước mà agent luôn cần biết cho dự án này…",
    instructionsByteCount: (used, max) => `${used} / ${max} byte`,
    instructionsTooLong: (max) =>
      `Hướng dẫn vượt giới hạn ${max} byte. Hãy rút ngắn rồi lưu.`,
    instructionsSaved: "Đã lưu",
    instructionsSaveFailed: "Không lưu được hướng dẫn",
    documentsShelf: "Kệ tài liệu",
    documentsShelfHint: "Thả tệp vào đây để thêm vào kệ",
    uploadDocuments: "Tải lên",
    uploadingDocuments: "Đang tải lên…",
    uploadDocumentFailed: "Không tải tài liệu lên được",
    documentFromThread: (threadName, kind) => `từ ${threadName} · ${kind}`,
    documentKindUpload: "tải lên",
    documentKindOutput: "kết quả",
    attachToThread: "Đính kèm vào cuộc trò chuyện",
    attachDialogTitle: "Đính kèm vào cuộc trò chuyện",
    attachDialogHint: "Chọn cuộc trò chuyện để đính kèm tài liệu này.",
    attachNoThreads: "Không có cuộc trò chuyện.",
    attachFailed: "Không đính kèm được tài liệu",
    attachedToThread: (name) => `Đã đính kèm "${name}"`,
    moveDocumentToTrash: "Chuyển vào thùng rác",
    moveDocumentToTrashTitle: "Chuyển vào thùng rác?",
    moveDocumentToTrashConfirm: (name, days) =>
      `"${name}" sẽ vào thùng rác và vẫn khôi phục được trong ${days} ngày.`,
    deleteDocumentFailed: "Không chuyển tài liệu vào thùng rác được",
    contentMissing: "Thiếu nội dung",
    previewUnsupported:
      "Trình duyệt không xem trước được loại tệp này. Hãy tải xuống để xem.",
    archivedDocumentsBanner:
      "Dự án này đã được lưu trữ. Tài liệu chỉ xem — không tải lên, không lưu vào dự án và không chuyển vào thùng rác.",
    conversationFiles: "Tệp cuộc trò chuyện",
    conversationFilesEmpty: "Các cuộc trò chuyện của dự án này chưa có tệp.",
    threadFilesTruncated: (count) =>
      `Chỉ hiện ${count} tệp đầu của cuộc trò chuyện này.`,
    threadFilesBrowseInThread: "Xem mọi tệp trong cuộc trò chuyện",
    saveToProject: "Lưu vào dự án",
    saveToProjectFailed: "Không lưu tệp vào dự án được",
    savedToProject: (name) => `Đã lưu "${name}" vào kệ`,
    shelfNameLabel: "Tên trên kệ",
    viewTrash: "Thùng rác",
    documentsLoadFailed: "Không tải được tài liệu dự án",
    threadFilesLoadFailed: "Không tải được tệp cuộc trò chuyện",
    memoryTitle: "Bộ nhớ dự án",
    memoryAutoExtract: "Trích xuất tự động",
    memoryDescription:
      "Những dữ kiện bền được học từ cuộc trò chuyện của dự án này, chỉ dùng trong dự án. Tắt trích xuất vẫn giữ bộ nhớ hiện có; hãy xóa dữ kiện bạn không muốn dùng nữa. Trích xuất tự động cần bật bộ nhớ toàn cục.",
    memoryEmpty:
      "Chưa có bộ nhớ dự án. Quy ước và bài học từ các cuộc trò chuyện sau sẽ hiện ở đây.",
    memoryPromote: "Chuyển vào hướng dẫn",
    memoryPromoted: "Đã chuyển vào hướng dẫn dự án",
    memorySaveFirst:
      "Hãy lưu phần hướng dẫn đang sửa trước khi chuyển một ký ức.",
    memoryLoadFailed: "Không tải được bộ nhớ dự án.",
    memoryActionFailed:
      "Không cập nhật được bộ nhớ dự án. Hãy làm mới rồi thử lại.",
  },

  trash: {
    title: "Thùng rác",
    empty: "Thùng rác trống.",
    loadFailed: "Không tải được thùng rác",
    retry: "Thử lại",
    originProject: (projectName) => `từ ${projectName}`,
    unknownProject: "Dự án không rõ",
    retentionLeft: (days) =>
      days <= 0
        ? "Còn chưa đầy một ngày"
        : days === 1
          ? "Còn 1 ngày"
          : `Còn ${days} ngày`,
    restore: "Khôi phục",
    restoreFailed: "Không khôi phục được tài liệu",
    restoredToast: (name) => `Đã khôi phục "${name}"`,
    restoreMergedToast: (name) =>
      `"${name}" trùng nội dung đang có trên kệ — đã gộp.`,
    restoreConflict:
      "Nội dung tài liệu này thiếu hoặc hỏng, nên vẫn ở trong thùng rác.",
    restorePickProjectTitle: "Chọn một dự án",
    restorePickProjectHint:
      "Dự án gốc đã mất hoặc đã lưu trữ. Hãy chọn một dự án đang hoạt động để khôi phục vào.",
    deletePermanently: "Xóa vĩnh viễn",
    deletePermanentlyTitle: "Xóa vĩnh viễn?",
    deletePermanentlyConfirm: (name) =>
      `"${name}" sẽ bị xóa vĩnh viễn. Không hoàn tác được.`,
    purgeFailed: "Không xóa được tài liệu",
    emptyTrash: "Dọn thùng rác",
    emptyTrashTitle: "Dọn thùng rác?",
    emptyTrashConfirm: (count) =>
      count === 1
        ? "1 tài liệu sẽ bị xóa vĩnh viễn. Không hoàn tác được."
        : `${count} tài liệu sẽ bị xóa vĩnh viễn. Không hoàn tác được.`,
    emptyTrashFailed: "Không dọn được thùng rác",
  },

  backgroundTasks: {
    label: "Tác vụ nền",
    title: "Tác vụ nền",
    description: "Việc MCP chạy lâu của cuộc trò chuyện này.",
    active: "Đang hoạt động",
    recent: "Gần đây",
    empty: "Chưa có tác vụ nền",
    emptyHint:
      "Tác vụ MCP chạy lâu được bắt đầu trong cuộc trò chuyện này sẽ hiện ở đây.",
    loadFailed: "Không tải được tác vụ nền",
    retry: "Thử lại",
    cancel: "Hủy tác vụ",
    cancelling: "Đang hủy…",
    cancelFailed: "Không hủy được tác vụ",
    cancellationRetrying: (attempt) =>
      `Lần hủy thứ ${attempt} thất bại; DeerFlow sẽ thử tiếp.`,
    notificationRetrying: (attempt) =>
      `Lần báo cho cuộc trò chuyện thứ ${attempt} thất bại; DeerFlow sẽ thử lại với khoảng chờ tăng dần.`,
    notificationStopped:
      "Đã ngừng gửi thông báo vào cuộc trò chuyện sau nhiều lần thất bại hoặc lỗi vĩnh viễn.",
    trackingDegraded:
      "Việc kiểm tra trạng thái đang chậm; DeerFlow vẫn đang thử lại.",
    viewDetails: "Xem chi tiết",
    hideDetails: "Ẩn chi tiết",
    detailsFailed: "Không tải được chi tiết tác vụ",
    result: "Kết quả",
    resultArtifact: "Tệp kết quả",
    inputRequired: "Cần thông tin",
    inputUnavailable:
      "Tích hợp này chưa gửi câu trả lời của bạn về tác vụ từ xa được.",
    lastPollError: "Lỗi trạng thái gần nhất",
    created: (time) => `Bắt đầu ${time}`,
    updated: (time) => `Cập nhật ${time}`,
    status: {
      submitted: "Đã gửi",
      working: "Đang làm",
      inputRequired: "Cần thông tin",
      completed: "Đã hoàn thành",
      failed: "Thất bại",
      cancelled: "Đã hủy",
    },
  },

  subagentBatches: {
    label: "Lô",
    title: "Lô subagent",
    description: "Việc theo lô chạy nền, có lưu tiến độ.",
    followUpPending: "Phần tiếp theo đã yêu cầu sẽ chạy sau lô này.",
    followUpStopped: "Đã dừng phần tiếp theo tự động.",
    workerUnavailable:
      "Trình xử lý lô không chạy. Các lô cũ vẫn xem được ở chế độ chỉ đọc.",
    empty: "Chưa có lô subagent",
    emptyHint:
      "Các lần gửi batch_task tường minh trong cuộc trò chuyện này sẽ hiện ở đây.",
    loadFailed: "Không tải được lô subagent",
    active: "Đang hoạt động",
    recent: "Gần đây",
    pause: "Tạm dừng",
    resume: "Tiếp tục",
    cancel: "Hủy",
    retryItem: "Thử lại",
    exportResults: "Xuất JSONL",
    viewResult: "Xem kết quả",
    resultTitle: "Kết quả lô",
    resultDescription: "Báo cáo đã lưu và căn cứ đã ghi cho mục này.",
    report: "Báo cáo",
    evidence: "Căn cứ đã ghi",
    noEvidence: "Không có căn cứ đã ghi",
    acceptance: "Tiêu chí nghiệm thu",
    noReport: "Chưa lưu báo cáo.",
    loadResultFailed: "Không tải được kết quả lô",
    truncated: "Báo cáo bị cắt bớt",
    omittedEvidence: (count) => `Đã bỏ ${count} mục căn cứ`,
    pagesLabel: "Trang",
    viewItems: "Xem các mục",
    hideItems: "Ẩn các mục",
    itemsFailed: "Không tải được các mục trong lô",
    progress: (completed, total) => `${completed}/${total} đã kết thúc`,
    limits: (live, running) => `Trực tiếp ${live} · đang chạy ${running}`,
    status: {
      queued: "Đang chờ",
      running: "Đang chạy",
      paused: "Đã tạm dừng",
      completed: "Đã hoàn thành",
      failed: "Thất bại",
      cancelled: "Đã hủy",
    },
  },

  // Scheduled tasks
  scheduledTasks: {
    scheduleType: {
      cron: "Lặp lại",
      once: "Một lần",
      interval: "Theo khoảng",
    },
    preset: {
      label: "Lặp",
      hourly: "Mỗi giờ",
      daily: "Hằng ngày",
      weekly: "Hằng tuần",
      monthly: "Hằng tháng",
      custom: "Cron tùy chỉnh",
    },
    fields: {
      minute: "Phút",
      time: "Giờ",
      weekday: "Vào",
      dayOfMonth: "Ngày trong tháng",
      cron: "Biểu thức cron",
      cronPlaceholder: "0 9 * * *",
      runAt: "Chạy lúc",
      invalidRunAt:
        "Giờ địa phương này không tồn tại trong múi giờ đã chọn. Hãy chọn giờ khác.",
      timezone: "Múi giờ",
      intervalAmount: "Mỗi",
      intervalUnit: "Đơn vị khoảng",
      intervalUnitSeconds: "giây",
      intervalUnitMinutes: "phút",
      intervalUnitHours: "giờ",
      intervalMinHint: "Tối thiểu {n} giây.",
    },
    weekdays: {
      mon: "Th 2",
      tue: "Th 3",
      wed: "Th 4",
      thu: "Th 5",
      fri: "Th 6",
      sat: "Th 7",
      sun: "CN",
    },
    preview: "Xem trước",
    cronHelp: "Mở crontab.guru",
    create: {
      agent: "Agent",
      leadAgent: "Agent mặc định",
    },
    search: {
      clear: "Xóa tìm kiếm",
      noResults: "Không có tác vụ khớp từ khóa và bộ lọc.",
    },
    page: {
      description:
        "Việc DeerFlow chạy giúp bạn theo lịch. Bạn cũng có thể nhờ ngay trong bất kỳ cuộc trò chuyện nào.",
      descriptionNoChat: "Việc DeerFlow chạy giúp bạn theo lịch.",
      newTask: "Tác vụ mới",
      tabs: {
        all: "Tất cả",
        active: "Đang hoạt động",
        paused: "Đã tạm dừng",
        finished: "Đã kết thúc",
      },
      tabsLabel: "Lọc theo trạng thái",
      search: "Tìm tác vụ",
      emptyTitle: "Chưa có tác vụ theo lịch",
      emptyBody:
        "Hãy nhờ trong bất kỳ cuộc trò chuyện nào, ví dụ “Mỗi ngày trong tuần lúc 9:00, tóm tắt thông báo GitHub của tôi”, hoặc tạo tại đây.",
      emptyBodyNoChat: "Tạo một tác vụ và DeerFlow sẽ chạy đúng lịch.",
      threadFilter: "Đang hiện tác vụ của cuộc trò chuyện này",
      showAll: "Hiện tất cả",
      schedulerOffTitle: "Máy chủ này đang tắt chạy tự động",
      schedulerOffBody:
        "Tác vụ sẽ không chạy theo lịch cho đến khi quản trị viên bật bộ lập lịch. Bạn vẫn xem được tác vụ, lịch sử, và chạy thử một lần ngay.",
      createBlocked: "Không tạo tác vụ mới khi chạy tự động đang tắt.",
      unavailableTitle: "Máy chủ này không có tác vụ theo lịch",
      unavailableBody: "Hãy nhờ quản trị viên bật tính năng.",
      selectHint: "Chọn một tác vụ để xem chi tiết.",
      tabCount: "{tab}, {count}",
      loading: "Đang tải tác vụ…",
      taskNotInChat: "Tác vụ này không thuộc cuộc trò chuyện này.",
    },
    time: {
      today: "Hôm nay {time}",
      tomorrow: "Ngày mai {time}",
      yesterday: "Hôm qua {time}",
      yourTime: "{time} giờ của bạn",
    },
    timeInline: {
      today: "hôm nay {time}",
      tomorrow: "ngày mai {time}",
      yesterday: "hôm qua {time}",
      yourTime: "{time} giờ của bạn",
    },
    list: {
      next: "Tiếp theo: {time}",
      pausedByAgentOn: "Agent đã tạm dừng · {time}",
      autoPausedLine: "Đã tạm dừng: 3 lượt liên tiếp không đạt mục tiêu",
      finishedLimit: "Đã kết thúc · đã dùng hết {max} lượt",
      finishedEnd: "Đã kết thúc · đã qua thời điểm kết thúc",
      runningNow: "Đang chạy",
    },
    detail: {
      agent: "Agent",
      runsCount: "{count} lượt chạy",
      runsCountOne: "{count} lượt chạy",
      noRuns: "Chưa có lượt chạy",
      loadFailed: "Không tải được tác vụ theo lịch",
      runs: "Lượt chạy",
      stopsWhen: "Dừng khi",
      does: "Việc cần làm",
      goal: "Mục tiêu mỗi lượt",
      notes: "Ghi chú từ cuộc trò chuyện",
      history: "Lịch sử",
      next: "Tiếp theo: {time}",
      firstRun: "Lượt đầu: {time}",
      notWhilePaused: "Không chạy khi đang tạm dừng",
      ifResumed: "Nếu tiếp tục, lượt tiếp theo: {time}",
      noMoreRuns: "Đã kết thúc — không còn lượt chạy",
      showAll: "Hiện tất cả",
      showLess: "Thu gọn",
      createdInChat: "Tạo trong một cuộc trò chuyện",
      openChat: "Mở cuộc trò chuyện",
      contextFresh: "Mỗi lượt mở một cuộc trò chuyện mới",
      contextReuse: "Chạy trong một cuộc trò chuyện có sẵn",
      copyTaskId: "Sao chép mã tác vụ",
      copied: "Đã sao chép",
      moreActions: "Thao tác khác",
      agentLine: "Agent: {name}",
    },
    stop: {
      pausesItself: "{condition}, rồi tự tạm dừng",
      reached: "Đã đến {time}",
      noRule: "Chạy cho đến khi bạn tạm dừng",
      afterRuns: "Sau {max} lượt chạy tự động",
      atTime: "Lúc {time}",
      capRuns: "Giới hạn an toàn: {max} lượt",
      capRunsUsed: "Giới hạn an toàn: đã dùng {used}/{max} lượt",
      capEnd: "Giới hạn an toàn: kết thúc {time}",
      capBoth: "Giới hạn an toàn: {max} lượt hoặc {time}, điều nào đến trước",
      trialsDontCount: "Lượt chạy thử không tính.",
      autoPauseRule: "Tạm dừng sau 3 lượt liên tiếp không đạt mục tiêu",
      goalTooltip:
        "Sau mỗi lượt, DeerFlow đối chiếu kết quả với mục tiêu này. Nếu chưa đạt, agent tiếp tục làm trong lượt đó. Đạt mục tiêu không kết thúc lịch.",
    },
    notice: {
      pausedByAgentTitle: "Agent đã tạm dừng",
      pausedByAgentBody:
        "Trong lượt lúc {time}, agent thấy điều kiện dừng đã thỏa và đã tạm dừng tác vụ. Chỉ tiếp tục nếu bạn muốn nó chạy tiếp.",
      seeThatRun: "Xem lượt đó",
      autoPausedTitle: "Đã tạm dừng: 3 lượt liên tiếp không đạt mục tiêu",
      autoPausedBody:
        "Lý do gần nhất: {reason}. Tiếp tục sẽ giữ số đếm, nên thêm một lần không đạt sẽ tạm dừng lại. Sửa mục tiêu hoặc hướng dẫn sẽ đếm lại từ đầu.",
      editGoal: "Sửa mục tiêu",
      openLatestRun: "Mở lượt gần nhất",
      resumeAnyway: "Vẫn tiếp tục",
      limitTitle: "Đã kết thúc: đã dùng hết {max} lượt",
      limitBodyRuns:
        "Để chạy tiếp, hãy tăng giới hạn số lượt hoặc bỏ giới hạn, rồi tiếp tục.",
      limitBodyEnd:
        "Để chạy tiếp, hãy đặt thời điểm kết thúc muộn hơn hoặc bỏ giới hạn, rồi tiếp tục.",
      endTitle: "Đã kết thúc: thời điểm kết thúc {time} đã qua",
      extendLimit: "Nới giới hạn",
      onceFinished: "Đã kết thúc: tác vụ một lần này đã chạy.",
      onceFailed: "Tác vụ một lần này chưa chạy xong. Hãy sửa giờ để chạy lại.",
    },
    renew: {
      title: "Nới giới hạn an toàn",
      bodyRuns:
        "Đã dùng {used}/{max} lượt chạy tự động. Hãy tăng giới hạn hoặc bỏ giới hạn để tiếp tục.",
      bodyEnd:
        "Thời điểm kết thúc {time} đã qua. Hãy đặt muộn hơn để tiếp tục.",
      removeCap: "Bỏ giới hạn này",
      removeCapBlocked:
        "Tác vụ tạo trong cuộc trò chuyện và chạy dày hơn mỗi giờ cần một giới hạn an toàn.",
      submit: "Tiếp tục",
    },
    notificationGroup: {
      savedUnavailable:
        "Tác vụ này có nhóm đã lưu, nhưng máy chủ không gửi thông báo nhóm được.",
      clearSaved: "Bỏ thông báo nhóm",
      bind: "Gắn một nhóm Feishu",
      bindWecom: "Gắn một nhóm WeCom",
      bindQq: "Gắn một nhóm QQ",
      name: "Tên nhóm",
      nameHint:
        "Đặt tên nhóm để nhận ra khi chọn nơi nhận thông báo. Gắn lại nhóm nếu muốn đổi tên.",
      refresh: "Làm mới danh sách nhóm",
      bindInstructions:
        "Thêm bot vào nhóm, rồi nhắc bot và gửi lệnh này trong nhóm đó. Sau khi gắn, hãy làm mới danh sách nhóm.",
      generating: "Đang tạo mã gắn…",
      bindFailed: "Không tạo được mã gắn. Hãy thử lại.",
      command: "Lệnh gắn nhóm",
      expiresAt: "Hết hạn lúc {time}.",
      copy: "Sao chép lệnh",
      copied: "Đã sao chép",
      copyFailed: "Không sao chép được. Hãy chọn và sao chép lệnh phía trên.",
      newCode: "Tạo mã mới",
      close: "Đóng hướng dẫn gắn",
      label: "Cũng báo cho một nhóm (tùy chọn)",
      detailLabel: "Nhóm bổ sung",
      none: "Không có nhóm bổ sung",
      personalHint:
        "Thông báo cá nhân của bạn không đổi. Nhóm đã chọn cũng nhận cập nhật tác vụ.",
      emptyHint: "Hãy gắn một nhóm bên dưới, rồi làm mới danh sách.",
      loading: "Đang tải nhóm…",
      unavailable: "Nhóm đã chọn không còn",
      unavailableHint:
        "Nhóm đã chọn không còn dùng được. Hãy giữ, bỏ, hoặc chọn nhóm khác.",
      unnamed: "Không có tên nhóm",
      unnamedHint: "Hãy gắn lại nhóm với một tên dễ nhận trước khi chọn.",
      loadFailed:
        "Không tải được nhóm. Lựa chọn của bạn vẫn giữ; bạn có thể lưu thay đổi khác hoặc bỏ nhóm.",
    },
    form: {
      createTitle: "Tác vụ theo lịch mới",
      editTitle: "Sửa tác vụ",
      title: "Tiêu đề",
      instructions: "Hướng dẫn",
      instructionsHint: "Mỗi lượt cần làm gì.",
      stopCondition: "Dừng khi (tùy chọn)",
      stopConditionHint:
        "Mỗi lượt kiểm tra điều này và tạm dừng tác vụ khi đúng, ví dụ “mọi mục trong danh sách đã được đánh dấu”.",
      goal: "Mục tiêu mỗi lượt (tùy chọn)",
      goalHint: "Một lượt phải đạt được gì. Được kiểm tra sau mỗi lượt.",
      goalNeedsFresh:
        "Có mục tiêu thì mỗi lượt phải mở một cuộc trò chuyện mới.",
      maxRuns: "Giới hạn an toàn: số lượt",
      maxRunsHint:
        "Số lượt tự động trong suốt đời tác vụ; không tính lượt thử. Đã dùng {used}.",
      endAt: "Giới hạn an toàn: kết thúc trước",
      invalidEndAt:
        "Thời điểm kết thúc này không tồn tại trong múi giờ đã chọn. Hãy chọn giờ khác.",
      labelWithZone: "{label} ({tz})",
      contextLabel: "Lượt chạy diễn ra ở đâu",
      clear: "Xóa",
      frequentNeedsCap:
        "Tác vụ tạo trong cuộc trò chuyện và chạy dày hơn mỗi giờ cần một giới hạn an toàn.",
      schedule: "Lịch chạy",
      agent: "Agent",
      advanced: "Nâng cao",
      contextFresh: "Mỗi lượt mở một cuộc trò chuyện mới",
      contextReuse: "Chạy trong một cuộc trò chuyện có sẵn",
      chatId: "Mã cuộc trò chuyện",
      reuseNoticeTitle: "Dùng lịch sử của cuộc trò chuyện này",
      reuseNoticeDescription:
        "Nếu đến giờ mà cuộc trò chuyện đang bận, lượt chạy xếp hàng và bắt đầu khi rảnh. Lượt thất bại nếu chờ lâu hơn giới hạn đã cấu hình.",
      create: "Tạo",
      save: "Lưu thay đổi",
      required: "Hãy điền tiêu đề, hướng dẫn và lịch.",
      endAtPassed: "Thời điểm kết thúc cũ đã qua; hãy đặt thời điểm mới.",
      copySuffix: "(bản sao)",
    },
    actions: {
      edit: "Sửa",
      pause: "Tạm dừng",
      resume: "Tiếp tục",
      runNow: "Chạy thử ngay",
      duplicate: "Nhân bản",
      delete: "Xóa",
      openTask: "Mở tác vụ",
      openChat: "Mở cuộc trò chuyện",
      busyRunning: "Đang chạy — hãy thử lại khi xong",
      busyQueued: "Một lượt đang chờ bắt đầu; tạm dừng để hủy lượt đó",
      busyQueuedPaused: "Một lượt đang chờ bắt đầu; hãy thử lại khi xong",
      alreadyQueued: "Đã có một lượt đang chờ bắt đầu",
      deleteTitle: "Xóa “{title}”?",
      deleteBody:
        "Các cuộc trò chuyện từ những lượt trước vẫn nằm trong danh sách. Không hoàn tác được.",
    },
    feedback: {
      created: "Đã tạo tác vụ",
      saved: "Đã lưu thay đổi",
      paused: "Đã tạm dừng",
      resumed: "Đã tiếp tục · lượt tiếp theo {time}",
      resumedNoTime: "Đã tiếp tục",
      deleted: "Đã xóa tác vụ",
      trialStarted: "Đã bắt đầu lượt chạy thử",
      trialQueued: "Đã xếp hàng lượt chạy thử; sẽ bắt đầu khi có chỗ",
      alreadyQueued:
        "Đã có một lượt đang chờ bắt đầu, nên không thêm lượt thử nữa",
    },
    errors: {
      create: "Không tạo được tác vụ theo lịch",
      update: "Không cập nhật được tác vụ theo lịch",
      pause: "Không tạm dừng được tác vụ theo lịch",
      resume: "Không tiếp tục được tác vụ theo lịch",
      trigger: "Không bắt đầu được lượt chạy thử",
      delete: "Không xóa được tác vụ theo lịch",
      withReason: "{action}: {reason}",
    },
    status: {
      enabled: "Đang hoạt động",
      paused: "Đã tạm dừng",
      running: "Đang chạy",
      completed: "Đã kết thúc",
      failed: "Thất bại",
      cancelled: "Đã hủy",
      pausedByAgent: "Agent đã tạm dừng",
      autoPaused: "Tự tạm dừng",
      deleted: "Đã xóa",
    },
    history: {
      navigation: "Các trang lịch sử lượt chạy",
      newer: "Lượt mới hơn",
      older: "Lượt cũ hơn",
      latest: "Lượt mới nhất",
      page: "Trang {page}",
      paused:
        "Các trang cũ không tự làm mới. Hãy về các lượt mới nhất để xem lượt hiện tại.",
      loading: "Đang tải lượt chạy…",
      loadFailed: "Không tải được lịch sử lượt chạy.",
      retry: "Thử lại",
      runNumber: "Lượt {n}",
      tokens: "{count} token",
      continuations: "Đã làm thêm {n} lần để đạt mục tiêu",
      details: "Chi tiết",
      listLabel: "Các lượt của tác vụ này",
      waitingForSlot: "Đang chờ một chỗ trống",
    },
    runTrigger: { scheduled: "Lượt theo lịch", manual: "Lượt chạy thử" },
    runStatus: {
      queued: "Đang chờ",
      launching: "Đang khởi chạy",
      running: "Đang chạy",
      success: "Xong",
      unmet: "Chưa đạt mục tiêu",
      failed: "Thất bại",
      skipped: "Đã bỏ qua",
      interrupted: "Bị gián đoạn",
    },
    goal: {
      met: "Đã đạt mục tiêu",
      stopRequested: "Lượt này đã tạm dừng tác vụ",
      assumptionBadge: "Đã đưa ra giả định",
      assumptionTooltip:
        "Agent đã tự điền phần hướng dẫn không nói rõ, và đã nói điều đó trong câu trả lời. Hãy mở lượt chạy để kiểm tra.",
      unchecked: "Không kiểm tra được mục tiêu",
      reasons: {
        missingEvidence: "Kiểm tra mục tiêu: thiếu căn cứ",
        needsUserInput: "Cần bạn cung cấp thêm",
        externalWait: "Kiểm tra mục tiêu: đang chờ một việc bên ngoài",
        runFailed: "Kiểm tra mục tiêu: lượt chạy chưa làm xong việc",
        goalNotMetYet: "Kiểm tra mục tiêu: chưa đạt",
        maxContinuations: "Đã chạm giới hạn tiếp tục",
        noProgress: "Các lượt không có tiến triển",
        tokenCapped: "Đã chạm ngân sách token",
        loopCapped: "Các lệnh gọi công cụ lặp lại đã chạm giới hạn an toàn",
        recursionCapped: "Lượt chạy đã chạm giới hạn số bước",
        evaluatorFailed:
          "Không kiểm tra được mục tiêu; bản thân lượt chạy có thể vẫn ổn",
        noDurableEndOfTurn:
          "Không kiểm tra được mục tiêu: không lưu được câu trả lời cuối",
        threadChanged:
          "Không kiểm tra được mục tiêu: cuộc trò chuyện thay đổi trong lúc kiểm tra",
        noVerdict: "Không có kết luận mục tiêu",
      },
    },
    runErrors: {
      restarted: "Bị gián đoạn: DeerFlow khởi động lại trong lượt này",
      leaseLost: "Bị gián đoạn: máy chủ đang chạy lượt này ngừng phản hồi",
      queueTimeout: "Đã bỏ qua: chờ chỗ trống quá lâu",
      pausedWhileQueued: "Đã hủy vì tác vụ bị tạm dừng",
      deletedWhileQueued: "Đã hủy vì tác vụ bị xóa",
      endReached: "Đã bỏ qua: đã chạm giới hạn an toàn",
      interrupted: "Dừng trước khi xong",
      launchFailed: "Lượt chạy này không bắt đầu được",
      failed:
        "Thất bại khi đang chạy. Hãy mở cuộc trò chuyện để xem dừng ở đâu.",
    },
    apiErrors: {
      generic: "Đã có lỗi.",
      invalidRequest: "Một số trường không hợp lệ.",
      invalidSchedule: "Lịch này không hợp lệ.",
      invalidScheduleType: "Kiểu lịch này không được hỗ trợ.",
      invalidTimezone: "Không rõ múi giờ.",
      intervalTooShort: "Hãy chọn khoảng ít nhất {min_seconds} giây.",
      intervalTooLong: "Hãy chọn khoảng từ 30 ngày trở xuống.",
      onceInPast: "Hãy chọn một thời điểm trong tương lai.",
      onceTooSoon:
        "Hãy chọn thời điểm cách hiện tại ít nhất {min_seconds} giây.",
      onceTimePassed:
        "Giờ của tác vụ một lần này đã qua. Hãy sửa giờ để chạy tiếp.",
      invalidContextMode: "Tùy chọn cuộc trò chuyện này không được hỗ trợ.",
      reuseThreadRequiresThread: "Hãy chọn cuộc trò chuyện để chạy trong đó.",
      threadNotFound: "Không tìm thấy cuộc trò chuyện đó.",
      invalidAssistant: "Tên agent đó không hợp lệ.",
      unknownAssistant: "Không tìm thấy agent đó.",
      invalidGoal: "Mục tiêu đang trống hoặc dài hơn {max_chars} ký tự.",
      goalRequiresFreshThread:
        "Có mục tiêu thì mỗi lượt phải mở một cuộc trò chuyện mới.",
      invalidStopCondition: "Điều kiện dừng dài tối đa {max_chars} ký tự.",
      invalidNotificationGroup:
        "Nhóm Feishu này không còn. Hãy chọn nhóm khác hoặc bỏ thông báo bổ sung.",
      invalidMaxRuns: "Giới hạn số lượt phải là số nguyên từ 1 trở lên.",
      endAtInPast: "Hãy chọn thời điểm kết thúc trong tương lai.",
      endAtBeforeFirstRun:
        "Thời điểm kết thúc phải còn chỗ cho ít nhất một lượt.",
      frequentRequiresLimit:
        "Tác vụ chạy dày hơn mỗi giờ cần một giới hạn an toàn: giới hạn số lượt hoặc thời điểm kết thúc.",
      maxRunsNotAboveUsed: "Giới hạn số lượt phải lớn hơn {used} lượt đã dùng.",
      limitsExhaustedRuns:
        "Đã dùng hết {max_runs} lượt tự động. Hãy tăng giới hạn để tiếp tục.",
      limitsExhaustedEnd:
        "Thời điểm kết thúc {end_at} đã qua. Hãy đặt muộn hơn để tiếp tục.",
      taskNotFound: "Tác vụ này không còn.",
      taskRunning: "Tác vụ này đang chạy. Hãy thử lại khi lượt chạy xong.",
      runQueued:
        "Một lượt đang chờ bắt đầu. Hãy tạm dừng tác vụ để hủy lượt đó, rồi thử lại.",
      taskChanged: "Tác vụ này vừa thay đổi. Hãy làm mới rồi thử lại.",
      taskFinished: "Tác vụ này đã kết thúc, nên không tạm dừng được.",
      taskQuotaExceeded:
        "Bạn đã có {limit} tác vụ đang hoạt động được tạo trong cuộc trò chuyện, kể cả tác vụ tạm dừng. Hãy xóa bớt để tạo thêm.",
      schedulerNotRunning:
        "Máy chủ này đang tắt chạy tự động, nên không tạo được tác vụ mới.",
      schedulerUnavailable: "Hiện máy chủ này không có tác vụ theo lịch.",
      triggerFailed: "Không bắt đầu được lượt chạy.",
      permissionDenied: "Bạn không có quyền làm việc này.",
    },
    events: {
      stoppedWithCondition:
        "{title} đã được agent tạm dừng. Điều kiện dừng đã thỏa: {condition}",
      stopped: "{title} đã được agent tạm dừng: điều kiện dừng đã thỏa.",
      autoPaused:
        "{title} đã tự tạm dừng: 3 lượt liên tiếp không đạt mục tiêu.",
      finishedRuns: "{title} đã kết thúc: đủ {max} lượt.",
      finishedOneRun: "{title} đã kết thúc: lượt duy nhất đã xong.",
      finishedEnd: "{title} đã kết thúc: thời điểm kết thúc đã qua.",
      finished: "{title} đã kết thúc.",
      onceDone: "{title} đã chạy.",
      onceFailed: "{title} chưa chạy xong.",
      label: "Cập nhật tác vụ theo lịch",
      suffixLastFailed: "Lượt chạy gần nhất đã thất bại.",
      suffixLastUnmet: "Lượt chạy gần nhất chưa đạt mục tiêu.",
      suffixLastInterrupted: "Lượt chạy gần nhất bị gián đoạn.",
      untitledTask: "Tác vụ chưa đặt tên",
    },
    card: {
      runs: "Lượt chạy",
      stopsWhen: "Dừng khi",
      results: "Kết quả",
      resultsFresh: "Mỗi lượt mở một cuộc trò chuyện mới",
      resultsReuse: "Đăng trong cuộc trò chuyện này",
      footer:
        "Lượt chạy thử không tính vào giới hạn. Muốn đổi giờ hoặc điều kiện dừng, cứ nói ở đây.",
      deleted: "Tác vụ này đã bị xóa.",
      trialStarted: "Đã bắt đầu lượt chạy thử",
      schedulerOff:
        "Máy chủ này đang tắt chạy tự động, nên tác vụ này sẽ không chạy theo lịch.",
      refreshFailed: "Không làm mới được tác vụ này.",
      label: "Tác vụ theo lịch {title}",
    },
    runThread: {
      scheduledRun: "Lượt theo lịch",
      trialRun: "Lượt chạy thử",
      runNumber: "lượt {n}",
      instructions: "Hướng dẫn tác vụ (gửi tự động)",
      stopsWhen: "Dừng khi: {condition}",
      notes: "Ghi chú từ cuộc trò chuyện",
      openTask: "Mở tác vụ",
    },
    header: {
      countLabel: "{count} tác vụ theo lịch trong cuộc trò chuyện này",
      countLabelOne: "1 tác vụ theo lịch trong cuộc trò chuyện này",
      runTask: "Tác vụ theo lịch",
    },
    recipes: {
      label: "Tạo nhanh",
      trending: {
        title: "GitHub Trending hằng ngày",
        desc: "Tóm tắt 10 kho đang nổi hôm nay",
        prompt:
          "Dùng web_search để mở trang GitHub Trending hôm nay, rồi tóm tắt 10 kho hàng đầu. Với mỗi kho: tên, ngôn ngữ chính, số sao tăng trong ngày, và một dòng mô tả kho đó là gì và vì sao đang nổi. Xuất thành danh sách markdown.",
      },
      news: {
        title: "Điểm tin công nghệ hằng ngày",
        desc: "Thu thập và tóm tắt tin công nghệ nổi bật trong ngày",
        prompt:
          "Dùng web_search để thu thập tin công nghệ nổi bật hôm nay về AI, công cụ cho lập trình viên, hạ tầng và bảo mật. Tóm tắt 5 mục quan trọng nhất: tiêu đề, nguồn, và một dòng rút ra. Xuất thành danh sách markdown.",
      },
      issues: {
        title: "Phân loại GitHub Issue",
        desc: "Phân loại issue đang mở của một kho (điền {{repo}})",
        prompt:
          "Phân loại các issue đang mở trong {{repo}}: liệt kê 10 issue mới nhất, gắn nhãn bug / feature / question, đánh dấu issue nào có vẻ cũ hoặc ưu tiên cao, và gợi ý 2 issue phù hợp để bắt đầu. Thay {{repo}} bằng kho đích (owner/name). Xuất thành bảng markdown.",
      },
      weekly: {
        title: "Báo cáo tuần",
        desc: "Soạn bản tóm tắt tuần, mỗi thứ Hai",
        prompt:
          "Soạn một báo cáo tuần: tuần này đã làm được gì, việc nào đang bị chặn, và 3 ưu tiên hàng đầu của tuần sau. Viết ngắn, dễ lướt.",
      },
    },
  },

  // Agents
  agents: {
    title: "Agent",
    description:
      "Tạo và quản lý agent tùy chỉnh với lời nhắc và năng lực riêng.",
    newAgent: "Agent mới",
    importAgent: "Nhập agent",
    importTitle: "Nhập agent tùy chỉnh",
    importDescription:
      "Chọn tên cục bộ cho agent này. Agent đã có không bao giờ bị ghi đè.",
    importName: "Tên agent",
    importInvalidFile: "Tệp này không phải JSON hợp lệ",
    importSuccess: "Đã nhập agent",
    exportAgent: "Xuất agent",
    exportSuccess: "Đã tải gói agent",
    emptyTitle: "Chưa có agent tùy chỉnh",
    emptyDescription:
      "Tạo agent tùy chỉnh đầu tiên với lời nhắc hệ thống riêng.",
    featureDisabledTitle: "Tính năng agent chưa được bật",
    featureDisabledDescription:
      "Máy chủ này chưa bật tính năng. Hãy liên hệ quản trị viên.",
    chat: "Trò chuyện",
    delete: "Xóa",
    deleteConfirm: "Bạn có chắc muốn xóa agent này? Không hoàn tác được.",
    deleteSuccess: "Đã xóa agent",
    newChat: "Cuộc trò chuyện mới",
    createPageTitle: "Thiết kế agent của bạn",
    createPageSubtitle:
      "Mô tả agent bạn muốn — tôi sẽ giúp tạo qua cuộc trò chuyện.",
    nameStepTitle: "Đặt tên agent mới",
    nameStepHint:
      "Chỉ chữ, số và dấu gạch ngang — lưu dạng chữ thường (ví dụ code-reviewer)",
    nameStepPlaceholder: "ví dụ code-reviewer",
    nameStepContinue: "Tiếp tục",
    nameStepInvalidError:
      "Tên không hợp lệ — chỉ dùng chữ, số và dấu gạch ngang",
    nameStepAlreadyExistsError: "Đã có agent mang tên này",
    nameStepNetworkError:
      "Yêu cầu mạng thất bại — hãy kiểm tra mạng hoặc kết nối máy chủ",
    nameStepCheckError: "Không kiểm tra được tên — hãy thử lại",
    nameStepCheckErrorWithDetail: "Kiểm tra tên thất bại: {detail}",
    nameStepApiDisabledError:
      "Máy chủ này chưa bật quản lý agent tùy chỉnh. Hãy liên hệ quản trị viên.",
    nameStepBootstrapMessage:
      "Tên agent tùy chỉnh mới là {name}. Hãy giúp tôi thiết kế mục đích, cách hành xử và SOUL.md trước khi lưu.",
    save: "Lưu agent",
    saving: "Đang lưu agent...",
    saveRequested:
      "Đã yêu cầu lưu. DeerFlow đang tạo và lưu một phiên bản đầu.",
    saveHint:
      "Bạn có thể lưu agent này bất cứ lúc nào từ menu góc trên bên phải, kể cả khi đây mới là bản nháp.",
    saveCommandMessage:
      "Hãy lưu agent tùy chỉnh này ngay, dựa trên mọi điều chúng ta đã bàn. Hãy coi đây là xác nhận rõ ràng của tôi để lưu. Nếu còn thiếu chi tiết, hãy giả định hợp lý, tạo một SOUL.md đầu tiên ngắn gọn bằng tiếng Anh, và gọi setup_agent ngay, không hỏi thêm xác nhận.",
    agentSaveFailed:
      "DeerFlow không lưu được agent này. Hãy xem lỗi công cụ rồi thử lại.",
    agentCreatedPendingRefresh:
      "DeerFlow chưa xác nhận được agent đã lưu. Hãy thử lưu lại.",
    more: "Thao tác khác",
    agentCreated: "Đã tạo agent!",
    startChatting: "Bắt đầu trò chuyện",
    backToGallery: "Về thư viện",
    settings: "Cài đặt agent",
    settingsTitle: "Cài đặt agent",
    settingsDisplayName: "Tên hiển thị",
    settingsDisplayNameTooLong: "Tên hiển thị dài tối đa 100 điểm mã Unicode.",
    settingsDisplayNameHint:
      "Hỗ trợ Unicode. Để trống để dùng mã định danh của agent",
    settingsToolGroups: "Quyền công cụ",
    settingsToolGroupsHint:
      "Giới hạn nhóm công cụ đã cấu hình mà agent này và các tác vụ được giao có thể dùng.",
    settingsToolGroupsAll: "Dùng mọi nhóm công cụ đã cấu hình",
    settingsToolGroupsLoadFailed: "Không tải được nhóm công cụ.",
    settingsToolGroupUnavailable: "không dùng được",
    settingsDescription:
      "Chọn tên hiển thị và mô hình mặc định cho agent này. Đổi mô hình có hiệu lực từ tin nhắn sau.",
    settingsKnowledge: "Tri thức mặc định",
    settingsKnowledgeHint:
      "Cuộc trò chuyện mới dùng phạm vi tri thức này. Từng tin nhắn có thể ghi đè. Chọn mọi kho tri thức sẽ bỏ ràng buộc.",
    settingsKnowledgeReset: "Dùng mọi kho tri thức",
    settingsKnowledgeSaveToolAccess:
      "Hãy lưu quyền công cụ trước khi chọn kho tri thức mặc định.",
    settingsModel: "Mô hình mặc định",
    settingsModelDefault: "Dùng mặc định toàn cục",
    settingsModelSwitchNeedsCatalog:
      "Hãy tải mô hình đã chọn trước khi lưu thay đổi mô hình này. Thử tải lại, hoặc khôi phục mô hình cũ để lưu các thay đổi khác.",
    settingsReasoningUnsupported: "không hỗ trợ",
    settingsThinkingRequiredHint:
      "Mô hình này bắt buộc suy nghĩ. Cài đặt Tắt đã lưu có thể khiến lượt chạy không bắt đầu. Hãy chọn Kế thừa hoặc Bật để thay.",
    settingsReasoningUnsupportedHint:
      "Giá trị đã lưu không được mô hình đã chọn hỗ trợ. Hãy chọn Kế thừa hoặc một giá trị được hỗ trợ để thay.",
    settingsTemperature: "Nhiệt độ",
    settingsTemperatureHint: "0 = nhất quán, cao hơn = sáng tạo hơn (0–2).",
    settingsMaxTokens: "Token đầu ra tối đa",
    settingsMaxTokensPlaceholder: "Kế thừa từ mô hình",
    settingsThinking: "Chế độ suy nghĩ",
    settingsThinkingOn: "Bật",
    settingsThinkingOff: "Tắt",
    settingsReasoningEffort: "Mức suy luận",
    settingsInherit: "Kế thừa",
    settingsSaved: "Đã lưu cài đặt agent",
    settingsInvalidTemperature: "Nhiệt độ phải từ 0 đến 2",
    settingsInvalidMaxTokens:
      "Token đầu ra tối đa phải là số nguyên dương, tối đa 200.000",
  },

  // Breadcrumb
  breadcrumb: {
    workspace: "Không gian làm việc",
    chats: "Cuộc trò chuyện",
  },

  // Workspace
  workspace: {
    officialWebsite: "Trang chính thức của DeerFlow",
    githubTooltip: "DeerFlow trên GitHub",
    settingsAndMore: "Cài đặt và mục khác",
    visitGithub: "DeerFlow trên GitHub",
    reportIssue: "Báo lỗi",
    contactUs: "Liên hệ",
    about: "Giới thiệu DeerFlow",
    logout: "Đăng xuất",
    gatewayUnavailable: "Gateway tạm thời không dùng được.",
    gatewayUnavailableRetrying: "Đang thử lại ở nền…",
    modelLoadFailed:
      "Không tải được mô hình. Có thể không chọn mô hình hoặc xem mức dùng token được.",
    modelLoadRetry: "Thử lại",
    modelLoadRetrying: "Đang thử lại…",
  },

  // Conversation
  conversation: {
    noMessages: "Chưa có tin nhắn",
    startConversation: "Hãy bắt đầu một cuộc trò chuyện để thấy tin nhắn ở đây",
    branchCreated: "Đã tạo nhánh cuộc trò chuyện",
    branchFailed: "Không tách nhánh được cuộc trò chuyện.",
    streamReplayGap:
      "Một số cập nhật trực tiếp đã hết hạn. Cuộc trò chuyện được khôi phục từ trạng thái đã lưu.",
    streamServerError: (status) =>
      `Dịch vụ tạm thời không dùng được (HTTP ${status}). Hãy thử lại.`,
    outlineLabel: "Dàn ý cuộc trò chuyện",
    outlineAttachmentFallback: "Tin nhắn ảnh hoặc tệp",
  },

  // Chats
  chats: {
    deleteChat: "Xóa cuộc trò chuyện",
    deleteConfirm: (title) =>
      `Xóa “${title}”? Việc này xóa cuộc trò chuyện và các tệp của nó. Không hoàn tác được.`,
    deleteFailed: "Không xóa được cuộc trò chuyện. Hãy thử lại.",
    noActiveChats: "Không có cuộc trò chuyện gần đây",
    activeChats: "Gần đây",
    archivedChats: "Đã lưu trữ",
    archiveChat: "Lưu trữ cuộc trò chuyện",
    restoreChat: "Khôi phục cuộc trò chuyện",
    archiveSuccess: "Đã lưu trữ cuộc trò chuyện",
    restoreSuccess: "Đã khôi phục cuộc trò chuyện",
    archiveFailed: "Không cập nhật được cuộc trò chuyện đã lưu trữ",
    archiveDescription:
      "Lưu trữ vẫn giữ tin nhắn và tệp. Tác vụ đang chạy và tác vụ theo lịch vẫn tiếp tục.",
    undoArchive: "Hoàn tác",
    noArchivedChats: "Không có cuộc trò chuyện đã lưu trữ",
    noMatchingChats: "Không có cuộc trò chuyện khớp trong phần đã tải",
    loadChatsFailed: "Không tải được cuộc trò chuyện",
    retryLoadChats: "Thử lại",
    searchChats: "Tìm cuộc trò chuyện",
    branchLabel: (title, parentTitle) => `${title}, nhánh của ${parentTitle}`,
    loadMoreToSearch: "Tải thêm để tìm cuộc trò chuyện cũ hơn",
    loadingMore: "Đang tải thêm...",
    loadOlderChats: "Tải cuộc trò chuyện cũ hơn",
    pinChat: "Ghim cuộc trò chuyện",
    unpinChat: "Bỏ ghim",
    pinChatFailed: "Không cập nhật được cuộc trò chuyện đã ghim",
  },

  // Thread origin and unread markers
  threads: {
    unread: "Chưa đọc",
    unreadLabel: "{title}, chưa đọc",
    unreadLabelWithOrigin: "{origin}, {title}, chưa đọc",
    origin: {
      schedule: "Lượt theo lịch",
      fromProvider: (provider: string) => `Từ ${provider}`,
      github: "Từ GitHub",
      extension: "Từ một phần mở rộng",
      providers: {
        buzz: "Buzz",
        dingtalk: "DingTalk",
        discord: "Discord",
        feishu: "Feishu",
        github: "GitHub",
        qq: "QQ",
        slack: "Slack",
        telegram: "Telegram",
        wechat: "WeChat",
        wecom: "WeCom",
      },
    },
  },

  // Sidecar
  sidecar: {
    title: "Cuộc trò chuyện phụ",
    open: "Mở cuộc trò chuyện phụ",
    close: "Đóng cuộc trò chuyện phụ",
    delete: "Xóa cuộc trò chuyện phụ",
    deleteConfirm:
      "Bạn có chắc muốn xóa cuộc trò chuyện phụ này? Không hoàn tác được. Nếu chỉ muốn ẩn, hãy dùng nút bật tắt ở đầu trang.",
    deleteSuccess: "Đã xóa cuộc trò chuyện phụ",
    deleteFailed: "Không xóa được cuộc trò chuyện phụ.",
    addToConversation: "Thêm vào cuộc trò chuyện",
    askInSideChat: "Hỏi trong cuộc trò chuyện phụ",
    reference: "Tham chiếu",
    selectedTextFragment: "{count} đoạn chữ đã chọn",
    selectedTextFragments: "{count} đoạn chữ đã chọn",
    clearReferences: "Bỏ các tham chiếu đã chọn",
    emptyTitle: "Hỏi tiếp",
    emptyDescription: "Hỏi tiếp dựa trên đoạn chữ được tham chiếu.",
    placeholder: "Hỏi sâu hơn...",
    send: "Gửi",
    sendFailed: "Không gửi được tin nhắn trong cuộc trò chuyện phụ.",
    noContext: "Chưa chọn ngữ cảnh",
    continuing: "Tiếp tục trong cuộc trò chuyện phụ này",
    selectionCrossesMessages:
      "Phần chọn trải nhiều tin nhắn. Hãy chọn chữ trong một câu trả lời để trích dẫn.",
  },

  // Channels
  channels: {
    title: "Kênh",
    connect: "Kết nối",
    modify: "Sửa",
    reconnect: "Kết nối lại",
    disconnect: "Ngắt kết nối",
    connected: "Đã kết nối",
    notConnected: "Chưa kết nối",
    pending: "Đang chờ",
    revoked: "Đã ngắt",
    disabled: "Đã tắt",
    unconfigured: "Chưa cấu hình",
    unavailable: "Hiện không kết nối kênh được.",
    unavailableShort: "Không dùng được",
    setupTitle: (name: string) => `Kết nối ${name}`,
    setupEditTitle: (name: string) => `Sửa ${name}`,
    wechatQr: {
      restart: "Quét lại",
      restartHint:
        "Đã rời màn hình bot trong WeChat? Hãy bắt đầu lại với mã QR mới.",
      restartKeepCommand:
        "Lệnh bạn đã sao chép vẫn còn hiệu lực cho đến khi hết hạn.",
      autoSave: "Token sẽ được lưu tự động sau khi xác nhận.",
      verifyTitle: "Nhập mã hiện trên WeChat",
      verifyDescription: "Nhập các chữ số trên điện thoại để hoàn tất kết nối.",
      verifyLabel: "Mã ghép",
      verifySubmit: "Tiếp tục kết nối",
      verifying: "Đang xác minh…",
      network: "Tạm thời không tới được WeChat. Đang tự thử lại…",
      invalid_response:
        "WeChat trả về phản hồi không như mong đợi. Hãy làm mới mã QR rồi thử lại.",
      verification_rejected:
        "Mã không khớp. Hãy kiểm tra chữ số trên điện thoại rồi thử lại.",
      verification_blocked:
        "Nhập sai quá nhiều lần. Hãy đợi một lúc, rồi làm mới mã QR.",
      already_bound:
        "WeChat báo bot này đã được liên kết. Hãy đóng hộp thoại và kiểm tra kết nối, hoặc chọn bot khác trên điện thoại.",
      saved: "Đã lưu token an toàn",
      savedDescription:
        "DeerFlow đã lưu token trên máy chủ và khởi động kênh WeChat.",
      bindTitle: "Thêm một bước: liên kết tài khoản",
      bindDescription:
        "Gửi lệnh này cho bot trong WeChat để liên kết với tài khoản DeerFlow của bạn.",
      bindWaiting: "Đang chờ tin nhắn của bạn trong WeChat…",
      bindLoading: "Đang chuẩn bị liên kết tài khoản…",
      bindFailed:
        "Token đã được lưu, nhưng chưa bắt đầu liên kết tài khoản được. Hãy thử lại.",
      bindExpired:
        "Mã liên kết này đã hết hạn. Hãy tạo mã mới; không cần quét lại.",
      bindRetry: "Tạo mã liên kết",
      copyCommand: "Sao chép lệnh",
      copied: "Đã sao chép",
      copyFailed: "Không sao chép được. Hãy chọn và sao chép lệnh phía trên.",
      connectedTitle: "WeChat đã kết nối",
      connectedDescription: "Bạn có thể gửi tin nhắn cho bot trong WeChat.",
      done: "Xong",

      login: "Quét mã QR",
      manual: "Dùng token",
      description: "Kết nối WeChat với không gian làm việc DeerFlow của bạn.",
      loading: "Đang tạo mã QR…",
      imageTitle: "Mã QR đăng nhập WeChat",
      scan: "Quét mã này bằng WeChat, rồi xác nhận trên điện thoại.",
      scanned: "Đã quét mã. Hãy xác nhận đăng nhập trên điện thoại.",
      expired: "Mã QR này đã hết hạn. Hãy tạo mã mới.",
      failed: "Đăng nhập WeChat thất bại hoặc đã bị hủy. Hãy thử lại.",
      confirmed: "Đã xác nhận đăng nhập WeChat.",
      retry: "Làm mới mã QR",
      methodLabel: "Cách kết nối",
      tokenTitle: "Kết nối bằng token bot",
      tokenDescription: "Dán token bot WeChat iLink hiện có để kết nối.",
      tokenPlaceholder: "Dán token bot",
      tokenHint:
        "Chưa có token? Hãy chọn Quét mã QR để kết nối bằng điện thoại.",
      privacy: "Thông tin đăng nhập chỉ được lưu trên máy chủ của bạn.",
      waiting: "Đang chờ quét",
      scannedTitle: "Đã quét xong",
      expiredTitle: "Mã QR đã hết hạn",
      failedTitle: "Không kết nối được",
    },
    bindingCode: {
      description: (provider: string) =>
        `Gửi lệnh này cho bot ${provider} để liên kết với tài khoản DeerFlow của bạn.`,
      loading: "Đang tạo mã liên kết…",
      copy: "Sao chép lệnh",
      copied: "Đã sao chép",
      copyFailed: "Không sao chép được. Hãy chọn và sao chép lệnh phía trên.",
      expiresAt: (time: string) => `Hết hạn lúc ${time}`,
      waiting: (provider: string) =>
        `Đang chờ tin nhắn của bạn trong ${provider}…`,
      connected: (provider: string) => `${provider} đã kết nối`,
      done: "Xong",
      expired: "Mã liên kết này đã hết hạn.",
      newCode: "Tạo mã mới",
      failed: "Không tạo được mã liên kết.",
      tooManyCodes:
        "Quá nhiều mã chưa dùng. Hãy dùng mã bạn đã có, hoặc đợi khoảng 10 phút để chúng hết hạn.",
      retry: "Thử lại",
    },
    setupDescription:
      "Nhập các giá trị tiến trình máy chủ này cần. Chúng không được ghi vào config.yaml.",
    saveAndConnect: "Lưu và kết nối",
    saveChanges: "Lưu thay đổi",
    descriptions: {
      buzz: "Kênh Buzz và tin nhắn trực tiếp qua agent DeerFlow của bạn.",
      qq: "Tin nhắn riêng QQ và @nhắc nhóm qua WebSocket.",
      telegram: "Tin nhắn riêng Telegram qua bot DeerFlow của bạn.",
      slack: "Tin nhắn và lượt nhắc trong không gian làm việc Slack.",
      discord: "Tin nhắn máy chủ Discord qua bot DeerFlow của bạn.",
      feishu: "Tin nhắn Feishu và Lark qua ứng dụng DeerFlow của bạn.",
      dingtalk: "Tin nhắn DingTalk Stream Push qua bot DeerFlow của bạn.",
      wechat: "Tin nhắn WeChat iLink qua bot DeerFlow của bạn.",
      wecom: "Tin nhắn WeCom qua bot AI DeerFlow của bạn.",
    },
    connectedAs: (name: string) => `Đã kết nối với tên ${name}.`,
    scheduledUpdates: {
      supported:
        "Cập nhật tác vụ theo lịch: có hỗ trợ; quản lý trong Cài đặt thông báo",
      supportedAfterConnect:
        "Cập nhật tác vụ theo lịch: có hỗ trợ; hãy kết nối để quản lý thông báo",
      unsupported: "Cập nhật tác vụ theo lịch: ứng dụng này chưa có",
    },
  },

  // Page titles (document title)
  pages: {
    appName: "DeerFlow",
    chats: "Cuộc trò chuyện",
    newChat: "Cuộc trò chuyện mới",
    untitled: "Chưa đặt tên",
  },

  // Tool calls
  toolCalls: {
    details: "Chi tiết công cụ",
    failed: "Thất bại",
    scheduleTaskPending: "Thao tác tác vụ theo lịch",
    stopScheduledTaskPending: "Tạm dừng tác vụ theo lịch này",
    toolName: "Tên công cụ",
    callId: "Mã lệnh gọi",
    input: "Đầu vào",
    result: "Kết quả",
    error: "Lỗi",
    noResult: "Chưa nhận được kết quả",
    emptyResult: "Kết quả trống",
    truncated: "Bản xem trước bị cắt; sao chép chỉ gồm phần đang hiện.",
    moreSteps: (count: number) => `Thêm ${count} bước`,
    lessSteps: "Ít bước hơn",
    executeCommand: "Chạy lệnh",
    presentFiles: "Trình bày tệp",
    needYourHelp: "Cần bạn giúp",
    useTool: (toolName: string) => `Dùng công cụ "${toolName}"`,
    searchFor: (query: string) => `Tìm "${query}"`,
    searchForRelatedInfo: "Tìm thông tin liên quan",
    searchForRelatedImages: "Tìm ảnh liên quan",
    searchForRelatedImagesFor: (query: string) =>
      `Tìm ảnh liên quan tới "${query}"`,
    searchOnWebFor: (query: string) => `Tìm trên web "${query}"`,
    viewWebPage: "Xem trang web",
    listFolder: "Liệt kê thư mục",
    readFile: "Đọc tệp",
    writeFile: "Ghi tệp",
    clickToViewContent: "Bấm để xem nội dung tệp",
    writeTodos: "Cập nhật danh sách việc",
    skillInstallTooltip: "Cài kỹ năng và cho DeerFlow dùng",
    browserNavigate: (url: string) => `Mở ${url} trong trình duyệt`,
    browserNavigateGeneric: "Mở trang trong trình duyệt",
    browserClick: "Bấm phần tử trong trình duyệt",
    browserType: "Gõ vào ô trên trình duyệt",
    browserSnapshot: "Đọc trang trong trình duyệt",
    browserGetText: "Đọc chữ trên trang trong trình duyệt",
    browserBack: "Quay lại trong trình duyệt",
    browserScreenshot: "Chụp màn hình trình duyệt",
    browserClose: "Đóng trình duyệt",
    scheduleTaskCreate: "Đã lên lịch một tác vụ",
    scheduleTaskUpdate: "Đã cập nhật một tác vụ theo lịch",
    scheduleTaskList: "Đã xem các tác vụ theo lịch",
    scheduleTaskPause: "Đã tạm dừng một tác vụ theo lịch",
    scheduleTaskResume: "Đã tiếp tục một tác vụ theo lịch",
    scheduleTaskDelete: "Đã xóa một tác vụ theo lịch",
    scheduleTaskNote: "Đã lưu ghi chú cho một tác vụ theo lịch",
    scheduleTaskTrial: "Đã bắt đầu một lượt chạy thử",
    scheduleTaskGeneric: "Đã quản lý tác vụ theo lịch",
    scheduleTaskFailed: "Thay đổi tác vụ theo lịch không thực hiện được",
    stopScheduledTask:
      "Đã tạm dừng tác vụ theo lịch này (có hiệu lực khi lượt chạy này kết thúc)",
  },

  humanInput: {
    answered: "Đã trả lời",
    pending: "Đang gửi...",
    readOnly: "Chỉ xem",
    otherLabel: "Câu trả lời khác",
    otherPlaceholder: "Nhập câu trả lời khác...",
    submit: "Gửi",
    emptyError: "Hãy nhập câu trả lời trước khi gửi.",
    requiredError: "Hãy điền mọi trường bắt buộc trước khi gửi.",
    requiredA11yLabel: "bắt buộc",
    selectPlaceholder: "Chọn...",
    answeredValue: (value: string) => `Đã trả lời: ${value}`,
    approval: {
      modeLabel: "Quyền công cụ",
      modeAsk: "Hỏi",
      modeAuto: "Tự động",
      modeFull: "Toàn quyền",
      askDescription: "Hỏi trước các thao tác cần phê duyệt.",
      autoDescription:
        "Tự xem xét từng thao tác; hỏi khi rủi ro hoặc quyền cần bạn quyết.",
      fullDescription:
        "Bỏ qua phê duyệt thao tác. Hạn chế khi triển khai và quyền tài khoản vẫn áp dụng.",
      approveThread: "Cho phép trong cuộc trò chuyện này",
      grantScope:
        "Chỉ áp dụng cho công cụ này với đúng các đối số này. Thu hồi trong Quyền công cụ.",
      editArguments: "Sửa đối số",
      fullArguments: "Đủ đối số",
      invalidArguments:
        "Hãy nhập một đối tượng JSON hợp lệ. Máy chủ cũng kiểm tra lược đồ công cụ.",
      revokeGrants: "Thu hồi phê duyệt của cuộc trò chuyện",
      grantsRevoked: "Đã thu hồi phê duyệt của cuộc trò chuyện",
      childApproval: "Một subagent đang chờ bạn phê duyệt.",
      title: "Cần phê duyệt công cụ",
      description:
        "Hãy xem mọi thao tác trước khi tiếp tục. Giá trị dài có thể bị cắt khi hiện, nhưng phần bị ẩn vẫn được thực thi đầy đủ. Phê duyệt sẽ cố chạy công cụ; các kiểm tra thực thi khác vẫn áp dụng.",
      waiting: "Đang chờ phê duyệt",
      loading: "Đang tải chi tiết phê duyệt...",
      loadFailed:
        "Không tải được chi tiết phê duyệt. Cuộc trò chuyện này vẫn đang chờ phê duyệt; hãy tải lại chi tiết trước khi tiếp tục.",
      reload: "Tải lại chi tiết phê duyệt",
      approve: "Phê duyệt",
      reject: "Từ chối",
      approveAll: "Phê duyệt tất cả",
      rejectAll: "Từ chối tất cả và kết thúc",
      submitDecisions: "Gửi quyết định",
      reasonLabel: "Lý do từ chối (tùy chọn)",
      reasonPlaceholder:
        "Nói với agent vì sao không nên chạy các công cụ này...",
      submitFailed:
        "Không gửi được phê duyệt. Hãy xem lại quyết định rồi thử lại.",
      submitTimeout:
        "Gửi phê duyệt bị quá giờ và đã dừng. Hãy xem lại quyết định rồi thử lại.",
      featureDisabled:
        "Phê duyệt công cụ hiện đã tắt. Bạn vẫn có thể từ chối tất cả và kết thúc an toàn.",
      noPending:
        "Phê duyệt này không còn chờ. Hãy tải lại cuộc trò chuyện trước khi thử lại.",
    },
  },

  // Subtasks
  uploads: {
    status: {
      pending: "Sẵn sàng gửi",
      uploading: "Đang tải lên…",
      uploaded: "Đã tải lên",
      failed: "Tải lên thất bại",
      cancelled: "Đã hủy",
    },
    cancelUpload: "Hủy tải lên",
    retryUpload: "Tải lên lại",
    notReady:
      "Tệp đính kèm chưa sẵn sàng. Hãy tải lại tệp lỗi hoặc bỏ chúng, rồi gửi lại.",
    attachment: "Tệp đính kèm",
    image: "Ảnh",
    removeAttachment: (filename) => `Bỏ tệp đính kèm: ${filename}`,
    uploading: "Đang tải lên...",
    uploadingFiles: "Đang tải tệp lên, vui lòng đợi...",
    limitsHint: (maxFiles: number, maxFileSize: string, maxTotalSize: string) =>
      `Thêm tệp đính kèm (tối đa ${maxFiles} tệp, mỗi tệp ${maxFileSize}, tổng ${maxTotalSize}). Hầu hết loại tệp thông thường đều được; hãy nén gói .app của macOS trước.`,
    filesTooLarge: (files: string, maxFileSize: string) =>
      `Các tệp vượt giới hạn ${maxFileSize} mỗi tệp không được thêm: ${files}.`,
    tooManyFiles: (count: number, maxFiles: number) =>
      `Không thêm ${count} tệp. Mỗi lần đính kèm tối đa ${maxFiles} tệp.`,
    totalSizeTooLarge: (count: number, maxTotalSize: string) =>
      `Không thêm ${count} tệp. Tổng tệp đính kèm tối đa ${maxTotalSize}.`,
  },

  subtasks: {
    subtask: "Tác vụ con",
    executing: (count: number) =>
      count === 1
        ? "Đang chạy tác vụ con"
        : `Đang chạy ${count} tác vụ con song song`,
    in_progress: "Đang chạy tác vụ con",
    completed: "Tác vụ con đã xong",
    failed: "Tác vụ con thất bại",
  },

  // Token Usage
  tokenUsage: {
    title: "Mức dùng token",
    label: "Token",
    input: "Đầu vào",
    output: "Đầu ra",
    total: "Tổng",
    view: "Hiển thị",
    unavailable:
      "Chưa có mức dùng token. Số liệu chỉ hiện sau khi mô hình trả lời thành công và nhà cung cấp trả về usage_metadata.",
    unavailableShort: "Không có số liệu",
    collecting: "Đang cộng token",
    note: "Tổng trên đầu trang dùng mức dùng đã lưu của cuộc trò chuyện, cộng phần đang chạy còn hiện khi lượt chưa stream xong. Mức dùng theo lượt và gỡ lỗi chỉ lấy từ tin nhắn đang hiện. Tổng có thể khác trang tính phí của nhà cung cấp.",
    presets: {
      off: "Tắt",
      summary: "Tóm tắt",
      perTurn: "Theo lượt",
      debug: "Gỡ lỗi",
    },
    presetDescriptions: {
      off: "Ẩn mức dùng token ở đầu trang và trong cuộc trò chuyện.",
      summary: "Chỉ hiện tổng của cuộc trò chuyện hiện tại ở đầu trang.",
      perTurn:
        "Hiện tổng ở đầu trang và một tóm tắt token cho mỗi lượt của trợ lý.",
      debug: "Hiện tổng ở đầu trang và chi tiết token từng bước để gỡ lỗi.",
    },
    finalAnswer: "Câu trả lời cuối",
    stepTotal: "Tổng của bước",
    sharedAttribution: "Dùng chung cho nhiều thao tác trong bước này",
    subagent: (description: string) => `Subagent: ${description}`,
    startTodo: (content: string) => `Bắt đầu việc: ${content}`,
    completeTodo: (content: string) => `Xong việc: ${content}`,
    updateTodo: (content: string) => `Cập nhật việc: ${content}`,
    removeTodo: (content: string) => `Bỏ việc: ${content}`,
  },

  contextUsage: {
    label: "Ngữ cảnh",
    title: "Cửa sổ ngữ cảnh",
    badgeAriaLabel: (percentage: string) =>
      `Cửa sổ ngữ cảnh đã dùng ${percentage}%`,
  },

  // Shortcuts
  workspaceSearch: {
    title: "Tìm cuộc trò chuyện",
    description: "Tìm cuộc trò chuyện và tin nhắn, hoặc chạy một lệnh.",
    placeholder: "Tìm tiêu đề và tin nhắn…",
    open: "Tìm kiếm",
    all: "Tất cả",
    threads: "Cuộc trò chuyện",
    messages: "Tin nhắn",
    includeArchived: "Gồm mục đã lưu trữ",
    archived: "Đã lưu trữ",
    recent: "Cuộc trò chuyện gần đây",
    searching: "Đang tìm…",
    indexing: "Đang chuẩn bị tìm tin nhắn… Kết quả sẽ hiện ở đây ngay.",
    unavailable:
      "Bản cài này không tìm trong tin nhắn được. Bạn vẫn tìm được theo tiêu đề cuộc trò chuyện.",
    unsupported: "Khung này không tìm kiếm được.",
    error: "Tìm kiếm chưa xong. Hãy thử lại.",
    empty:
      "Không khớp. Hãy thử từ khóa khác hoặc gồm cả cuộc trò chuyện đã lưu trữ.",
    more: "Hiện thêm kết quả",
    retry: "Thử lại",
    hint: "↑ ↓ để di chuyển · Enter để mở · > cho lệnh",
    user: "Bạn",
    assistant: "Trợ lý",
    context: "Ngữ cảnh tin nhắn",
    returnToLatest: "Về tin nhắn mới nhất",
    loadingContext: "Đang tải ngữ cảnh tin nhắn…",
    messageUnavailable:
      "Tin nhắn này không còn. Hãy về cuộc trò chuyện để xem lịch sử hiện tại.",
    matchedMessage: "Tin nhắn đã tìm thấy",
    earlier: "Tin nhắn trước đó",
    later: "Tin nhắn sau đó",
    untitled: "Cuộc trò chuyện chưa đặt tên",
  },
  shortcuts: {
    searchActions: "Tìm thao tác...",
    noResults: "Không tìm thấy kết quả.",
    actions: "Thao tác",
    keyboardShortcuts: "Phím tắt",
    keyboardShortcutsDescription: "Đi trong DeerFlow nhanh hơn với phím tắt.",
    openCommandPalette: "Mở bảng lệnh",
    toggleSidebar: "Ẩn hoặc hiện thanh bên",
  },

  // Settings
  settings: {
    title: "Cài đặt",
    description: "Chỉnh cách DeerFlow hiển thị và hoạt động với bạn.",
    models: {
      connectionSettings: "Cài đặt kết nối",
      importTitle: "Lấy và thêm mô hình",
      importDescription:
        "Lấy danh mục của nhà cung cấp, chọn mô hình, rồi kiểm tra và thêm. Mỗi lần kiểm tra có thể bị tính phí. Chỉ mô hình vượt bài kiểm tra gọi công cụ dạng stream mới được bật.",
      savedConnection: "Dùng kết nối đã lưu",
      newConnection: "Kết nối mới",
      fetchModels: "Lấy mô hình",
      searchModels: "Tìm mô hình…",
      selectVisible: "Chọn mục đang hiện",
      clearSelection: "Bỏ chọn",
      alreadyConfigured: "Đã cấu hình",
      noCatalogResults:
        "Không có mô hình khớp. Hãy thử từ khóa khác hoặc thêm mô hình thủ công.",
      catalogTruncated:
        "Danh mục này bị giới hạn 2.000 mô hình hoặc 20 trang. Bạn vẫn thêm mã mô hình khác thủ công được.",
      discovery_unsupported:
        "Điểm cuối này không liệt kê mô hình. Hãy thêm mã mô hình thủ công.",
      discovery_failed:
        "Không lấy được danh mục. Hãy kiểm tra kết nối rồi thử lại.",
      importUncertain:
        "Chưa xác nhận kết quả. Hãy thử lại để xem mô hình này đã được lưu chưa.",
      importStopped:
        "Đã dừng. Các mô hình đã xong được lưu; hãy thử lại để đối chiếu yêu cầu cuối.",
      stopImport: "Dừng",
      closeCatalog: "Xong",
      catalogCount: (visible, total, selected) =>
        `${visible} / ${total} mô hình · đã chọn ${selected}`,
      testAndAdd: (count) => `Kiểm tra và thêm (${count})`,
      title: "Mô hình",
      description:
        "Quản lý mô hình dùng chung cho người dùng. Mô hình từ cấu hình máy chủ chỉ xem.",
      adminOnly:
        "Chỉ quản trị viên quản lý mô hình dùng chung. Bản demo không có tính năng này.",
      add: "Thêm mô hình",
      loading: "Đang tải mô hình…",
      failed: "Không hoàn tất được yêu cầu.",
      reload: "Tải lại",
      empty: "Chưa cấu hình mô hình.",
      yaml: "Cấu hình máy chủ · chỉ xem",
      enabled: "Đã bật",
      disabled: "Đã tắt",
      conflict: "Tên này đã được cấu hình máy chủ giữ.",
      edit: "Sửa mô hình",
      enable: "Bật",
      disable: "Tắt",
      formDescription:
        "Chọn nhà cung cấp rồi nhập khóa API và mã mô hình. Việc kiểm tra gửi một yêu cầu gọi công cụ dạng stream ngắn và có thể bị tính phí.",
      provider: "Nhà cung cấp",
      name: "Tên duy nhất",
      displayName: "Tên hiển thị",
      endpoint: "URL gốc",
      modelId: "Mã mô hình",
      keepKey: "Để trống để giữ khóa đã lưu",
      optionalKey: "Không bắt buộc với điểm cuối không cần xác thực",
      clearKey: "Xóa khóa API đã lưu",
      contextWindow: "Cửa sổ ngữ cảnh (tùy chọn)",
      maxTokens: "Token đầu ra tối đa (tùy chọn)",
      vision: "Nhận ảnh đầu vào",
      cancel: "Hủy",
      test: "Kiểm tra kết nối",
      working: "Đang xử lý…",
      save: "Lưu",
      saved: "Đã lưu mô hình",
      success: "Đã qua bài kiểm tra stream và gọi công cụ.",
      tool_call_missing:
        "Điểm cuối có phản hồi, nhưng không trả về lệnh gọi công cụ. Hãy kiểm tra khả năng dùng công cụ của mô hình.",
      connection_failed:
        "Kiểm tra kết nối thất bại. Hãy kiểm tra điểm cuối, thông tin đăng nhập, mã mô hình và hỗ trợ stream hoặc công cụ.",
      customProvider: "Tương thích OpenAI, tùy chỉnh",
      apiKey: "Khóa API",
      advanced: "Cài đặt nâng cao",
      providerDefault: "Mặc định của nhà cung cấp",
      requiredKey: "Hãy nhập khóa API của nhà cung cấp",
      providerChanged:
        "Kết nối đã đổi. Hãy nhập khóa API mới; khóa đã lưu sẽ không được dùng lại.",
      missing_api_key:
        "Nhà cung cấp này cần khóa API. Hãy nhập khóa, hoặc tắt mô hình trước khi xóa khóa.",
      authentication_failed:
        "Xác thực thất bại. Hãy kiểm tra khóa API và khu vực hoặc gói của nhà cung cấp.",
      response_limit: "Câu trả lời kiểm tra vượt giới hạn đầu ra an toàn.",
      revisionConflict:
        "Mô hình đã đổi hoặc tên bị giữ. Hãy tải lại danh sách và mở lại trình sửa. Bản nháp vẫn được giữ.",
      keyOrCapabilities:
        "Hãy kiểm tra khóa API và các ghi đè năng lực. Mô hình có sẵn phải được tắt trước khi xóa khóa.",
      invalidModel:
        "Cấu hình mô hình không hợp lệ. Hãy kiểm tra nhà cung cấp, mã mô hình và cài đặt nâng cao.",
    },
    users: {
      title: "Quản lý người dùng",
      description:
        "Tạm khóa hoặc mở lại đăng nhập cho tài khoản trên bản triển khai này. Tài khoản bị tắt bị từ chối ở mọi cửa xác thực; các phiên đang mở kết thúc ngay.",
      adminOnly:
        "Chỉ quản trị viên quản lý người dùng. Bản demo không có tính năng này.",
      loading: "Đang tải người dùng…",
      failed: "Không tải được người dùng.",
      reload: "Tải lại",
      empty: "Chưa có người dùng.",
      email: "Email",
      role: "Vai trò",
      status: "Trạng thái",
      active: "Đang hoạt động",
      disabled: "Đã tắt",
      disable: "Tắt",
      enable: "Bật",
      updateFailed: "Không cập nhật được tài khoản.",
    },
    sections: {
      models: "Mô hình",
      users: "Người dùng",
      account: "Tài khoản",
      appearance: "Giao diện",
      channels: "Kênh",
      memory: "Bộ nhớ",
      subagents: "Subagent",
      notification: "Thông báo",
      about: "Giới thiệu",
    },
    memory: {
      title: "Bộ nhớ",
      description:
        "DeerFlow tự học từ cuộc trò chuyện của bạn ở nền. Những ký ức này giúp DeerFlow hiểu bạn hơn và cá nhân hóa trải nghiệm.",
      empty: "Không có dữ liệu bộ nhớ để hiện.",
      rawJson: "JSON thô",
      exportButton: "Xuất bộ nhớ",
      exportSuccess: "Đã xuất bộ nhớ",
      importButton: "Nhập bộ nhớ",
      importConfirmTitle: "Nhập bộ nhớ?",
      importConfirmDescription:
        "Việc này ghi đè bộ nhớ hiện tại bằng bản sao lưu JSON đã chọn.",
      importFileLabel: "Tệp đã chọn",
      importInvalidFile:
        "Không đọc được tệp bộ nhớ đã chọn. Hãy chọn một bản xuất JSON hợp lệ.",
      importSuccess: "Đã nhập bộ nhớ",
      manualFactSource: "Thủ công",
      addFact: "Thêm dữ kiện",
      addFactTitle: "Thêm dữ kiện bộ nhớ",
      editFactTitle: "Sửa dữ kiện bộ nhớ",
      addFactSuccess: "Đã tạo dữ kiện",
      editFactSuccess: "Đã cập nhật dữ kiện",
      clearAll: "Xóa toàn bộ bộ nhớ",
      clearAllConfirmTitle: "Xóa toàn bộ bộ nhớ?",
      clearAllConfirmDescription:
        "Việc này xóa mọi tóm tắt và dữ kiện đã lưu. Không hoàn tác được.",
      clearAllSuccess: "Đã xóa toàn bộ bộ nhớ",
      factDeleteConfirmTitle: "Xóa dữ kiện này?",
      factDeleteConfirmDescription:
        "Dữ kiện này sẽ bị xóa khỏi bộ nhớ ngay. Không hoàn tác được.",
      factDeleteSuccess: "Đã xóa dữ kiện",
      factContentLabel: "Nội dung",
      factCategoryLabel: "Danh mục",
      factConfidenceLabel: "Độ tin cậy",
      factContentPlaceholder: "Mô tả dữ kiện bộ nhớ bạn muốn lưu",
      factCategoryPlaceholder: "bối cảnh",
      factConfidenceHint: "Dùng một số từ 0 đến 1.",
      factSave: "Lưu dữ kiện",
      factValidationContent: "Nội dung dữ kiện không được để trống.",
      factValidationConfidence: "Độ tin cậy phải là số từ 0 đến 1.",
      noFacts: "Chưa có dữ kiện đã lưu.",
      summaryReadOnly:
        "Các mục tóm tắt hiện chỉ xem. Bạn có thể thêm, sửa hoặc xóa từng dữ kiện, hoặc xóa toàn bộ bộ nhớ.",
      memoryFullyEmpty: "Chưa lưu bộ nhớ.",
      factPreviewLabel: "Dữ kiện sẽ xóa",
      searchPlaceholder: "Tìm trong bộ nhớ",
      filterAll: "Tất cả",
      filterFacts: "Dữ kiện",
      filterSummaries: "Tóm tắt",
      noMatches: "Không tìm thấy bộ nhớ khớp.",
      markdown: {
        overview: "Tổng quan",
        userContext: "Bối cảnh người dùng",
        work: "Công việc",
        personal: "Cá nhân",
        topOfMind: "Đang nghĩ tới",
        cognitiveStyle: "Cách suy nghĩ",
        historyBackground: "Lịch sử",
        recentMonths: "Vài tháng gần đây",
        earlierContext: "Bối cảnh trước đó",
        longTermBackground: "Bối cảnh dài hạn",
        updatedAt: "Cập nhật lúc",
        facts: "Dữ kiện",
        empty: "(trống)",
        table: {
          category: "Danh mục",
          confidence: "Độ tin cậy",
          confidenceLevel: {
            veryHigh: "Rất cao",
            high: "Cao",
            normal: "Bình thường",
            unknown: "Không rõ",
          },
          content: "Nội dung",
          source: "Nguồn",
          unknown: "Không rõ",
          createdAt: "Ngày tạo",
          view: "Xem",
        },
      },
    },
    appearance: {
      themeTitle: "Chủ đề",
      themeDescription: "Chọn giao diện theo thiết bị hoặc giữ cố định.",
      system: "Hệ thống",
      light: "Sáng",
      dark: "Tối",
      systemDescription: "Tự khớp tùy chọn của hệ điều hành.",
      lightDescription: "Bảng màu sáng, tương phản cao cho ban ngày.",
      darkDescription: "Bảng màu tối, giảm chói để dễ tập trung.",
      languageTitle: "Ngôn ngữ",
      languageDescription:
        "Chọn ngôn ngữ giao diện và ngôn ngữ ưu tiên cho câu trả lời.",
    },
    tools: {
      adminRequired: "Cần quyền quản trị để quản lý công cụ MCP.",
      empty: "Chưa cấu hình công cụ MCP.",
      addServer: "Thêm máy chủ",
      addServerDescription:
        "Dán định nghĩa JSON do máy chủ MCP công bố. Chấp nhận cả bản đồ máy chủ trần và bản bọc trong `mcpServers`. Tên đã có phải đổi qua Sửa.",
      addServerPlaceholder: `{
  "mcpServers": {
    "my-server": {
      "command": "npx",
      "args": ["-y", "@my-org/my-mcp-server"]
    }
  }
}`,
      serverDefinitionLabel: "Định nghĩa JSON của máy chủ MCP",
      definitionEmpty: "Hãy dán định nghĩa máy chủ MCP.",
      definitionInvalidJson: "Hãy nhập JSON hợp lệ.",
      definitionRootNotObject:
        "Hãy nhập một đối tượng JSON mô tả một hoặc nhiều máy chủ MCP.",
      definitionNoServers: "Không thấy máy chủ MCP trong định nghĩa.",
      definitionServerNotObject:
        'Cấu hình của máy chủ "{name}" phải là một đối tượng JSON.',
      editServer: "Sửa máy chủ MCP",
      editServerDescription:
        'Sửa toàn bộ định nghĩa JSON của "{name}". Tên máy chủ cố định; hãy thêm máy chủ mới và xóa máy chủ này nếu muốn đổi tên.',
      editSingleServer: "Mỗi lần chỉ sửa đúng một máy chủ MCP.",
      editServerNameMismatch: 'Giữ nguyên tên máy chủ "{name}" khi sửa.',
      serverAlreadyExists: 'Máy chủ MCP "{name}" đã có. Hãy dùng Sửa.',
      removeServer: "Xóa máy chủ MCP",
      removeServerDescription:
        'Xóa "{name}" khỏi cấu hình MCP? Các công cụ của nó sẽ không còn cho agent dùng.',
      unnamedServer: "(tên trống)",
    },
    subagents: {
      title: "Subagent",
      description:
        "Người làm việc dùng lại được, để Lead Agent và Custom Agent được phép giao các tác vụ có giới hạn.",
      executionNote:
        "Mỗi lần gọi bắt đầu một ngữ cảnh tạm mới, không có cuộc trò chuyện hay bộ nhớ lâu dài, và không hỏi thêm người dùng. Lời nhắc hệ thống đổi cách hành xử; công cụ và kỹ năng mới cấp năng lực thật.",
      adminNote:
        "Bạn xem được danh mục. Chỉ quản trị viên thêm, sửa, bật hoặc xóa subagent.",
      create: "Thêm subagent",
      empty: "Không có subagent.",
      sourceBuiltin: "Tích hợp sẵn",
      sourceConfig: "config.yaml",
      sourceManaged: "Được quản lý",
      conflict: "Trùng tên — không đưa vào lúc chạy",
      overridden: "Một số giá trị lúc chạy bị config.yaml ghi đè",
      createTitle: "Thêm subagent được quản lý",
      editTitle: "Sửa subagent được quản lý",
      name: "Tên",
      nameHint: "Chỉ dùng chữ, số và dấu gạch ngang.",
      displayName: "Tên hiển thị",
      descriptionLabel: "Mô tả khi được giao việc",
      systemPrompt: "Lời nhắc hệ thống",
      model: "Mô hình",
      inheritModel: "Kế thừa từ bên gọi",
      tools: "Công cụ được phép (cách nhau bởi dấu phẩy)",
      skills: "Kỹ năng (cách nhau bởi dấu phẩy)",
      listModeAll: "Kế thừa mọi mục có sẵn",
      listModeNone: "Không cho phép",
      listModeSelected: "Chỉ các tên đã chọn",
      listNamesPlaceholder: "Các tên cách nhau bởi dấu phẩy",
      maxTurns: "Số lượt tối đa",
      timeout: "Thời gian chờ (giây)",
      created: "Đã tạo subagent",
      saved: "Đã lưu subagent",
      deleted: "Đã xóa subagent",
      deleteConfirm:
        "Xóa subagent được quản lý này? Custom Agent có thể vẫn tham chiếu tên, và tạo lại cùng tên sẽ nối lại các ràng buộc đó. Không hoàn tác được.",
      bindingTitle: "Quyền subagent",
      bindingDescription:
        "Chọn subagent mà Custom Agent này được gọi. Máy chủ thực thi điều này.",
      allAllowed: "Mọi subagent đang bật",
      noneAllowed: "Không có subagent",
      selectedAllowed: "Subagent đã chọn",
      missing: "Thiếu hoặc không dùng được; bỏ chọn để gỡ",
    },
    channels: {
      title: "Kênh",
      description:
        "Kết nối tài khoản nhắn tin để gửi tin tới DeerFlow từ bên ngoài trình duyệt.",
      disabled:
        "Máy chủ này chưa bật kết nối kênh. Hãy nhờ quản trị viên bật channel_connections.",
    },
    integrations: {
      title: "Tích hợp",
      description:
        "Kết nối công cụ và nền tảng làm việc bên thứ ba để agent dùng trực tiếp.",
      refresh: "Làm mới",
      install: "Cài đặt",
      reinstall: "Cài lại",
      installing: "Đang cài...",
      ready: "Sẵn sàng",
      pending: "Đang chờ",
      available: "Có sẵn",
      unavailable: "Không dùng được",
      connected: "Đã kết nối",
      loadFailed: "Không tải được trạng thái tích hợp",
      adminRequired: "Cần quyền quản trị để cài tích hợp.",
      lark: {
        title: "Lark / Feishu CLI",
        description:
          "Cài các kỹ năng agent Lark/Feishu chính thức và để agent dùng Lark sau khi được ủy quyền.",
        skillPack: "Gói kỹ năng",
        gatewayCli: "CLI của Gateway",
        auth: "Xác thực",
        sandboxRuntime: "Môi trường sandbox",
        sandboxRuntimeInitContainer: "Được cấp bởi init container",
        sandboxRuntimeBroker: "Được cấp bởi broker sidecar",
        sandboxRuntimeGatewayDownload: "Được cấp bởi Gateway",
        sandboxRuntimeNotReady:
          "Chưa sẵn sàng — lark-cli có thể thiếu khi trò chuyện",
        notInstalled: "Chưa cài",
        skillsInstalled: (installed, expected) =>
          `Đã cài ${installed}/${expected} kỹ năng`,
        installedVersion: (version) => `Đã cài: ${version}`,
        updateAvailable: (version) =>
          `Có bản cập nhật: ${version} — quản trị viên cài lại sẽ cập nhật CLI Gateway được quản lý và gói kỹ năng`,
        runtimeVersionMismatch:
          "Phiên bản gói kỹ năng khác lark-cli lúc chạy của Gateway; quản trị viên cài lại sẽ cố cập nhật CLI Gateway được quản lý và khớp lại gói kỹ năng",
        authNotConfigured: "Chưa kết nối",
        authConfigured:
          "Đã cấu hình thông tin đăng nhập (chưa kiểm tra trực tiếp)",
        authConfiguredFor: (user) =>
          `${user} · đã cấu hình thông tin đăng nhập (chưa kiểm tra trực tiếp)`,
        connect: "Kết nối Lark",
        authStarting: "Đang mở liên kết kết nối...",
        checkingConnection: "Đang kiểm tra kết nối...",
        connectedAction: "Kết nối lại Lark",
        requestPermissions: "Xin quyền",
        alreadyConnected:
          "Lark đã được kết nối. Nếu ủy quyền hết hạn, hãy làm mới trạng thái rồi kết nối lại.",
        changeAppButton: "Đổi ứng dụng Lark",
        changeAppTitle: "Chuyển sang ứng dụng Lark khác",
        changeAppDescription:
          "Trỏ tài khoản DeerFlow của bạn sang ứng dụng Lark/Feishu khác. Chỉ ảnh hưởng tài khoản của bạn; người dùng khác không đổi.",
        changeAppIdLabel: "App ID",
        changeAppSecretLabel: "App Secret",
        changeAppAuthResetNote:
          "Việc chuyển sẽ thu hồi ủy quyền của ứng dụng trước. Bạn sẽ ủy quyền ứng dụng mới ở bước sau.",
        changeAppSubmit: "Chuyển ứng dụng",
        changeAppReRegister: "Đăng ký lại trên trình duyệt",
        changeAppSwitched:
          "Đã chuyển ứng dụng Lark. Hãy kết nối lại để ủy quyền ứng dụng mới.",
        brandFeishu: "Feishu",
        brandLark: "Lark",
        connectionStarted: "Đã mở liên kết kết nối",
        connectionReady: "Kết nối đã sẵn sàng. Đang mở ủy quyền...",
        authStarted: "Đã mở trang ủy quyền. DeerFlow sẽ tự nhận khi hoàn tất.",
        authorizationStillPending:
          'Ủy quyền chưa xong. Hãy hoàn tất trên trình duyệt; DeerFlow vẫn tự kiểm tra. Bạn có thể bấm "Tôi đã ủy quyền xong" nếu trang không cập nhật.',
        permissionTitle: "Phạm vi ủy quyền",
        permissionDescription:
          "Mặc định, DeerFlow chỉ hoàn tất đăng nhập cơ bản và không xin quyền nghiệp vụ. Hãy chọn các miền bạn cần ở đây; người đã kết nối có thể ủy quyền lại để thêm (các phạm vi được cộng dồn).",
        authDomains: {
          calendar: {
            label: "Lịch",
            description: "Sự kiện, rảnh/bận, RSVP và đặt phòng họp.",
          },
          im: {
            label: "Tin nhắn",
            description:
              "Gửi và trả lời tin, quản lý nhóm, tìm lịch sử, tải phương tiện.",
          },
          docs: {
            label: "Tài liệu",
            description: "Tạo, đọc, cập nhật và tìm tài liệu.",
          },
          drive: {
            label: "Drive",
            description:
              "Tải tệp lên và xuống, tìm tài liệu và wiki, quản lý bình luận.",
          },
          sheets: {
            label: "Bảng tính",
            description: "Đọc, ghi, nối, tìm và xuất bảng tính.",
          },
          base: {
            label: "Base",
            description:
              "Bảng Bitable, trường, bản ghi, chế độ xem, bảng điều khiển và quy trình.",
          },
          wiki: {
            label: "Wiki",
            description: "Không gian tri thức, nút và tài liệu wiki.",
          },
          task: {
            label: "Tác vụ",
            description:
              "Tác vụ, danh sách, tác vụ con, bình luận và nhắc việc.",
          },
          mail: {
            label: "Thư",
            description:
              "Duyệt, tìm, đọc, gửi, trả lời, chuyển tiếp và quản lý thư nháp.",
          },
          vc: {
            label: "Cuộc họp",
            description: "Biên bản cuộc họp, tệp biên bản và bản ghi.",
          },
          minutes: {
            label: "Biên bản",
            description: "Nội dung biên bản họp và bản ghi lời.",
          },
          note: {
            label: "Ghi chú",
            description: "Ghi chú cuộc họp và nội dung liên quan.",
          },
          slides: {
            label: "Trang trình bày",
            description: "Bài trình bày và nội dung trang.",
          },
          markdown: {
            label: "Markdown",
            description: "Tạo, lấy, vá và ghi đè tệp .md gốc trên Drive.",
          },
          mindnotes: {
            label: "Ghi chú sơ đồ",
            description: "Nội dung ghi chú sơ đồ.",
          },
          contact: {
            label: "Danh bạ",
            description:
              "Tìm người theo tên, email hoặc số điện thoại và xem hồ sơ.",
          },
          approval: {
            label: "Phê duyệt",
            description:
              "Tra cứu và xử lý tác vụ phê duyệt; hủy và CC các phiên.",
          },
          attendance: {
            label: "Chấm công",
            description: "Tra cứu bản ghi chấm công cá nhân.",
          },
          okr: {
            label: "OKR",
            description:
              "Mục tiêu, kết quả then chốt, căn chỉnh, chỉ số và tiến độ.",
          },
          event: {
            label: "Sự kiện",
            description:
              "Đăng ký và nhận sự kiện nền tảng theo thời gian thực.",
          },
          apps: {
            label: "Ứng dụng",
            description:
              "Tạo ứng dụng Spark/Miaoda, xuất bản trang và quản lý phạm vi truy cập.",
          },
          all: {
            label: "Tất cả",
            description:
              "Xin mọi miền nghiệp vụ mà lark-cli hỗ trợ. Chỉ dùng khi chưa rõ quyền còn thiếu.",
          },
        },
        customScopeLabel: "Phạm vi OAuth chính xác",
        customScopePlaceholder: "Ví dụ calendar:calendar.event:read",
        customScopeDescription:
          "Nâng cao: nếu lỗi báo thiếu phạm vi, hãy dán vào đây. Ví dụ: calendar:calendar.event:read, calendar:calendar.free_busy:read.",
        openConnectionLinkTitle: "Tiếp tục kết nối Lark",
        openConnectionLinkDescription:
          "Lần kết nối đầu cần một lần xác nhận trên trình duyệt từ Lark. Hãy mở liên kết bên dưới và hoàn tất, rồi quay lại đây để tiếp tục ủy quyền.",
        openAuthLinkTitle: "Ủy quyền Lark trên trình duyệt",
        openAuthLinkDescription:
          "Mở liên kết bên dưới để ủy quyền. DeerFlow tự kiểm tra và sẽ lưu kết nối sau khi được duyệt.",
        waitingAuthTitle: "Đang chờ ủy quyền Lark",
        waitingAuthDescription:
          "Hãy hoàn tất ủy quyền trên trang trình duyệt vừa mở. DeerFlow sẽ tự cập nhật khung này; nút bên dưới chỉ là phương án dự phòng.",
        openAuthLink: "Mở liên kết",
        copyAuthLink: "Sao chép liên kết",
        completeAuth: "Tôi đã ủy quyền xong",
        continueAuth: "Tôi đã xác nhận trên trình duyệt, tiếp tục",
        preparingAuthorization: "Đang chuẩn bị ủy quyền...",
        completingAuth: "Đang kiểm tra...",
        authExpiresIn: (seconds) =>
          `Liên kết này hết hạn sau khoảng ${seconds} giây.`,
        installingTitle: "Đang cài gói kỹ năng chính thức",
        installingDescription:
          "Thường xong trong 30 giây; mạng chậm có thể mất khoảng 1 phút. Trạng thái tự làm mới khi cài xong.",
        installNextTitle: "Hãy cài gói kỹ năng chính thức trước",
        installNextDescription:
          "Sau khi cài, /lark-doc, /lark-im, /lark-sheets và các kỹ năng liên quan hiện trong mục lục kỹ năng.",
        cliNextTitle: "Cài CLI của Gateway",
        cliNextDescription:
          "Gói kỹ năng đã được cài, nhưng Gateway không tìm thấy lark-cli. Quản trị viên cài lại sẽ cố tải CLI Gateway được quản lý; bản triển khai ngoại tuyến có thể dùng ảnh đã kèm @larksuite/cli.",
        configuredTitle: "Thông tin đăng nhập Lark đã được cấu hình cục bộ",
        configuredDescription:
          "Đã có thông tin đăng nhập, nhưng chưa kiểm tra còn hiệu lực với Lark hay không. Hãy kết nối lại để làm mới và kiểm tra ủy quyền trực tiếp.",
        connectedTitle: "Ủy quyền Lark đã được kiểm tra trực tiếp",
        connectedDescription:
          "Ủy quyền của người dùng hiện tại đã được kiểm tra với Lark trong lần kết nối này. Hãy kết nối lại khi cần làm mới hoặc thêm quyền.",
        authNextTitle: "Tiếp theo, hoàn tất ủy quyền trên trình duyệt",
        authNextDescription:
          "Bấm “Kết nối Lark”; DeerFlow kiểm tra trạng thái hiện tại trước và chỉ mở ủy quyền trên trình duyệt khi chưa kết nối hoặc đã hết hạn.",
      },
    },
    skills: {
      diagnosticsTitle: "Không tải được",
      diagnosticsScope:
        "Chỉ hiện lỗi cú pháp YAML trong kỹ năng tùy chỉnh của bạn. Sau khi sửa tệp SKILL.md, hãy tải lại kỹ năng. Không báo thiếu phần mở đầu, lỗi kiểm tra siêu dữ liệu, hay tệp không đọc được hoặc không phải UTF-8. Gói dùng chung và gói liên kết từ bên ngoài bị loại.",
      diagnosticsInvalid: "Phần mở đầu YAML không hợp lệ.",
      diagnosticsQuote:
        "Hãy đặt trong dấu ngoặc các giá trị có dấu hai chấm rồi một khoảng trắng.",
      diagnosticsRefresh: "Tải lại kỹ năng",
      diagnosticsRefreshing: "Đang tải lại kỹ năng…",
      diagnosticsFailed:
        "Không kiểm tra được lỗi YAML của kỹ năng tùy chỉnh. Hãy tải lại để thử lại.",
      diagnosticsReloadFailed: "Không tải lại được kỹ năng. Hãy thử lại.",
      exportPrevious: "50 tệp trước",
      exportNotices: {
        skill_export_yaml_alias:
          "Xuất không hỗ trợ bí danh YAML. Hãy thay bí danh bằng giá trị tường minh trong SKILL.md.",
        skill_export_yaml_complexity:
          "Khai báo YAML lồng quá sâu hoặc quá phức tạp để xuất.",
        skill_export_invalid_declaration:
          "Một khai báo thông tin đăng nhập sai định dạng đã bị bỏ; hãy xem SKILL.md.",
        skill_export_link: "Không xuất được tệp hoặc thư mục dạng liên kết.",
        skill_export_unsupported_node:
          "Chỉ hỗ trợ tệp và thư mục thông thường; không xuất được liên kết cứng và tệp đặc biệt.",
        skill_export_invalid_path:
          "Đường dẫn này không mang sang máy khác được, hoặc trùng đường dẫn khác.",
        skill_export_nested_skill:
          "Trình cài không nhận tệp SKILL.md lồng nhau.",
        skill_export_executable_binary:
          "Trình cài không nhận tệp nhị phân thực thi.",
        skill_export_invalid_frontmatter:
          "SKILL.md phải có khai báo hợp lệ và tên phải khớp thư mục kỹ năng.",
        skill_export_sensitive_filename:
          "Tên tệp này có thể chứa thông tin đăng nhập cục bộ hoặc siêu dữ liệu kho mã.",
        skill_export_platform_declarations:
          "Hãy cấu hình công cụ và thông tin đăng nhập đã khai báo ở môi trường đích.",
      },
      exportSkill: "Xuất",
      exportTitle: "Xuất kỹ năng",
      exportDescription: "Tải kỹ năng đang lưu dưới dạng tệp .skill.",
      exportLoading: "Đang chuẩn bị danh sách tệp…",
      exportFiles: "Tệp",
      exportDirectories: "Thư mục",
      exportSize: "Kích thước chưa nén",
      exportContents: "Nội dung gói",
      exportMore: "50 tệp tiếp",
      exportRequirements: "Yêu cầu đã khai báo",
      exportCompatibility: "Tương thích",
      exportTools: "Công cụ được phép",
      exportSecrets: "Tên thông tin đăng nhập",
      exportOptional: "tùy chọn",
      exportRequired: "bắt buộc",
      exportUndeclared: "Chưa khai báo",
      exportNone: "Không có",
      exportScope:
        "Gồm mọi tệp trong kỹ năng này. Cài đặt tài khoản, cuộc trò chuyện và lịch sử ngoài thư mục kỹ năng không được đưa vào. Hãy cấu hình lại công cụ và thông tin đăng nhập ở nơi nhận.",
      exportWarnings: "Hãy kiểm tra nội dung gói",
      exportWarningDescription:
        "Các lưu ý này dựa trên tên tệp và khai báo. Bí mật ghi trong tệp gói vẫn được đưa vào nguyên trạng. Đây không phải bước quét bảo mật.",
      exportBlocked: "Không xuất được gói này",
      exportDownload: "Tải tệp .skill",
      exportDownloading: "Đang chuẩn bị tải xuống…",
      exportHandedOff: "Đã chuyển tệp cho trình duyệt để tải xuống.",
      exportChanged: "Kỹ năng đã đổi. Hãy làm mới danh sách tệp trước khi tải.",
      exportRefresh: "Làm mới danh sách tệp",
      exportFailed: "Không xuất được kỹ năng này. Hãy thử lại.",
      exportBusy: "Đang có hai lượt xuất. Hãy thử lại sau giây lát.",
      exportTimeout: "Chuẩn bị gói bị quá giờ. Hãy thử lại sau giây lát.",
      exportLimit: "Gói vượt một giới hạn xuất.",
      exportNotFound:
        "Kỹ năng tùy chỉnh này không còn. Hãy làm mới danh sách kỹ năng.",
      createSkill: "Tạo kỹ năng",
      emptyTitle: "Chưa có kỹ năng agent",
      emptyDescription:
        "Đặt các thư mục kỹ năng agent vào thư mục `/skills/custom` ở thư mục gốc của DeerFlow.",
      emptyButton: "Tạo kỹ năng đầu tiên",
      adminRequired: "Cần quyền quản trị để quản lý kỹ năng agent.",
      installAdminRequired: "Cần quyền quản trị để cài kỹ năng agent.",
      installFromFile: "Cài tệp .skill",
      installingArchive: "Đang cài...",
      invalidArchive: "Hãy chọn tệp có đuôi .skill.",
      archiveTooLarge: "Gói kỹ năng phải từ 100 MiB trở xuống.",
      installFailed: "Không cài được gói kỹ năng.",
    },
    notification: {
      title: "Thông báo",
      description:
        "DeerFlow chỉ gửi thông báo hoàn tất khi cửa sổ không hoạt động. Hữu ích với tác vụ chạy lâu, để bạn chuyển sang việc khác và được báo khi xong.",
      requestPermission: "Xin quyền thông báo",
      deniedHint:
        "Quyền thông báo bị từ chối. Bạn có thể bật trong cài đặt trang của trình duyệt để nhận thông báo khi xong.",
      testButton: "Gửi thông báo thử",
      testTitle: "DeerFlow",
      testBody: "Đây là thông báo thử.",
      notSupported: "Trình duyệt của bạn không hỗ trợ thông báo.",
      disableNotification: "Tắt thông báo",
      channels: {
        title: "Thông báo tác vụ theo lịch",
        description:
          "Chọn ứng dụng đã kết nối sẽ nhận cập nhật tác vụ theo lịch. Tắt các mục này không ảnh hưởng trò chuyện. Thông báo đang chờ và lần thử lại bị hủy, và bật lại không gửi lại cập nhật cũ. Thông báo đang được gửi vẫn có thể tới.",
        providers: {
          feishu: "Feishu / Lark",
          wecom: "WeCom",
          wechat: "WeChat",
          qq: "QQ",
        },
        toggleLabel: (provider: string) =>
          `Thông báo tác vụ theo lịch của ${provider}`,
        eventsTitle: "Thông báo lượt chạy tác vụ và mục tiêu",
        eventsDescription:
          "Nhắc nhở tùy chọn trên ứng dụng nhắn tin cho lượt chạy tác vụ web hoặc nền thông thường và mục tiêu, trên các ứng dụng đã bật phía trên (mặc định tắt).",
        events: {
          run_completed: "Tác vụ hoặc mục tiêu đã xong",
          run_failed: "Tác vụ hoặc mục tiêu thất bại",
          human_input_requested: "Cần bạn cung cấp thêm",
        },
        eventToggleLabel: (event: string) => `Thông báo ${event}`,
        loading: "Đang tải tùy chọn thông báo…",
        saving: "Đang lưu…",
        loadFailed: "Không tải được tùy chọn thông báo. Hãy thử lại.",
        saveFailed:
          "Không lưu được thay đổi này. Cài đặt trước vẫn đang hiện; hãy thử lại.",
        unavailable: "Dịch vụ này chưa hỗ trợ tùy chọn thông báo.",
        empty:
          "Hãy kết nối một ứng dụng hỗ trợ thông báo tác vụ theo lịch trong Cài đặt → Kênh.",
        retry: "Thử lại",
      },
    },
    account: {
      profileTitle: "Hồ sơ",
      email: "Email",
      role: "Vai trò",
      ssoProvider: "SSO",
      changePasswordTitle: "Đổi mật khẩu",
      changePasswordDescription: "Cập nhật mật khẩu tài khoản.",
      ssoPasswordDescription: "Mật khẩu do nhà cung cấp SSO quản lý.",
      ssoPasswordMessage:
        "Tài khoản này đăng nhập bằng {provider}, nên DeerFlow không quản lý hoặc đổi mật khẩu tại đây. Hãy dùng cài đặt tài khoản của nhà cung cấp SSO.",
      currentPassword: "Mật khẩu hiện tại",
      newPassword: "Mật khẩu mới",
      confirmNewPassword: "Xác nhận mật khẩu mới",
      passwordMismatch: "Mật khẩu mới không khớp",
      passwordTooShort: "Mật khẩu phải có ít nhất 8 ký tự",
      passwordChangedSuccess: "Đã đổi mật khẩu",
      networkError: "Lỗi mạng. Hãy thử lại.",
      updating: "Đang cập nhật...",
      updatePassword: "Cập nhật mật khẩu",
      signOut: "Đăng xuất",
    },
    acknowledge: {
      emptyTitle: "Lời cảm ơn",
      emptyDescription: "Ghi công và lời cảm ơn sẽ hiện ở đây.",
    },
  },
  login: {
    signInTitle: "Đăng nhập vào tài khoản",
    createAccountTitle: "Tạo tài khoản mới",
    email: "Email",
    emailPlaceholder: "you@example.com",
    password: "Mật khẩu",
    passwordPlaceholder: "•••••••",
    rememberMe: "Giữ đăng nhập",
    rememberMeDescription:
      "Giữ phiên trình duyệt này khi có thể. DeerFlow chỉ lưu email của bạn, không lưu mật khẩu.",
    pleaseWait: "Vui lòng đợi...",
    signIn: "Đăng nhập",
    createAccount: "Tạo tài khoản",
    createAdminAccount: "Tạo tài khoản quản trị",
    adminSetupRequiredTitle: "Cần thiết lập quản trị viên",
    adminSetupRequiredDescription:
      "DeerFlow cần một tài khoản quản trị viên trước khi tạo tài khoản thường.",
    orContinueWith: "Hoặc tiếp tục với",
    ssoHint:
      "Nếu tài khoản dùng đăng nhập một lần, hãy đăng nhập bằng lựa chọn bên dưới.",
    continueWith: (provider: string) => `Tiếp tục với ${provider}`,
    noAccountSignUp: "Chưa có tài khoản? Đăng ký",
    haveAccountSignIn: "Đã có tài khoản? Đăng nhập",
    backToHome: "← Về trang chủ",
    networkError: "Lỗi mạng. Hãy thử lại.",
    serviceUnavailableTitle: "Dịch vụ tạm thời không dùng được",
    serviceUnavailableDescription:
      "Gateway phản hồi quá lâu. Hãy kiểm tra Gateway đang chạy, rồi thử lại.",
    retry: "Thử lại",
    authFailed: "Xác thực thất bại.",
    errors: {
      sso_failed:
        "Đăng nhập SSO thất bại. Hãy thử lại hoặc đăng nhập bằng email.",
      sso_cancelled: "Đăng nhập SSO đã bị hủy.",
      sso_account_exists:
        "Đã có tài khoản với email này. Hãy đăng nhập bằng mật khẩu hoặc liên hệ quản trị viên.",
      sso_not_allowed:
        "Tài khoản của bạn không được đăng nhập SSO. Hãy liên hệ quản trị viên.",
      account_disabled: "Tài khoản này đã bị tắt. Hãy liên hệ quản trị viên.",
      invalid_email: "Hãy nhập địa chỉ email hợp lệ.",
      password_too_short: "Mật khẩu phải có ít nhất 6 ký tự.",
      registration_password_too_short: "Mật khẩu phải có ít nhất 8 ký tự.",
    },
  },
};
