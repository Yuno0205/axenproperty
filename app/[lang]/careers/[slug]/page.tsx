import JobDescription from "@/components/JobDescription";

export default function CareersPage() {
  // Hardcoded data thay vì fetch từ Contentful
  const data = [
    {
      fields: {
        slug: "chuyen-vien-kinh-doanh-bds",
        name: "Chuyên viên Kinh doanh Bất động sản",
        field: "Kinh doanh",
        experience: "1-2 năm kinh nghiệm",
        address: "Hồ Chí Minh",
        salary: "15 - 20 triệu VND",
        employmentType: "Toàn thời gian",
        description: `
          <h2>Mô tả công việc</h2>
          <ul>
            <li>Tư vấn, giới thiệu sản phẩm bất động sản cho khách hàng</li>
            <li>Tìm kiếm, phát triển khách hàng tiềm năng</li>
            <li>Thực hiện các hoạt động marketing, quảng bá sản phẩm</li>
            <li>Chăm sóc và duy trì mối quan hệ với khách hàng</li>
            <li>Hoàn thành chỉ tiêu doanh số được giao</li>
          </ul>

          <h2>Yêu cầu công việc</h2>
          <ul>
            <li>Tốt nghiệp Đại học các chuyên ngành liên quan</li>
            <li>Có 1-2 năm kinh nghiệm trong lĩnh vực bất động sản</li>
            <li>Kỹ năng giao tiếp, thương lượng tốt</li>
            <li>Nhiệt huyết, năng động, chịu được áp lực công việc</li>
            <li>Có laptop và phương tiện đi lại</li>
          </ul>

          <h2>Quyền lợi</h2>
          <ul>
            <li>Lương cơ bản: 15-20 triệu VND</li>
            <li>Hoa hồng hấp dẫn không giới hạn</li>
            <li>Đào tạo nghiệp vụ miễn phí</li>
            <li>Các chế độ BHXH, BHYT theo quy định</li>
            <li>Môi trường làm việc chuyên nghiệp, năng động</li>
            <li>Cơ hội thăng tiến rõ ràng</li>
          </ul>
        `,
      },
    },
    {
      fields: {
        slug: "truong-phong-marketing",
        name: "Trưởng phòng Marketing",
        field: "Marketing",
        experience: "3-5 năm kinh nghiệm",
        address: "Hồ Chí Minh",
        salary: "25 - 35 triệu VND",
        employmentType: "Toàn thời gian",
        description: `
          <h2>Mô tả công việc</h2>
          <ul>
            <li>Xây dựng và triển khai chiến lược marketing tổng thể</li>
            <li>Quản lý và điều hành đội ngũ marketing</li>
            <li>Phát triển thương hiệu công ty trên các kênh truyền thông</li>
            <li>Lập kế hoạch và ngân sách marketing</li>
            <li>Phân tích thị trường và đối thủ cạnh tranh</li>
          </ul>

          <h2>Yêu cầu công việc</h2>
          <ul>
            <li>Tốt nghiệp Đại học chuyên ngành Marketing hoặc liên quan</li>
            <li>Có 3-5 năm kinh nghiệm ở vị trí tương đương</li>
            <li>Kinh nghiệm trong lĩnh vực bất động sản là một lợi thế</li>
            <li>Kỹ năng lãnh đạo, quản lý đội nhóm</li>
            <li>Thành thạo các công cụ marketing digital</li>
          </ul>

          <h2>Quyền lợi</h2>
          <ul>
            <li>Lương: 25-35 triệu VND (thỏa thuận theo năng lực)</li>
            <li>Thưởng KPI hàng tháng/quý</li>
            <li>Được tham gia các khóa đào tạo nâng cao</li>
            <li>BHXH, BHYT, BHTN đầy đủ</li>
            <li>Du lịch, team building hàng năm</li>
          </ul>
        `,
      },
    },
    {
      fields: {
        slug: "nhan-vien-tu-van-khach-hang",
        name: "Nhân viên Tư vấn Khách hàng",
        field: "Chăm sóc khách hàng",
        experience: "Không yêu cầu kinh nghiệm",
        address: "Hà Nội, Hồ Chí Minh",
        salary: "10 - 15 triệu VND",
        employmentType: "Toàn thời gian",
        description: `
          <h2>Mô tả công việc</h2>
          <ul>
            <li>Tiếp nhận và tư vấn thông tin cho khách hàng</li>
            <li>Giải đáp thắc mắc của khách hàng qua điện thoại, email</li>
            <li>Hỗ trợ khách hàng trong quá trình giao dịch</li>
            <li>Ghi nhận phản hồi và xử lý khiếu nại</li>
            <li>Chăm sóc khách hàng sau bán</li>
          </ul>

          <h2>Yêu cầu công việc</h2>
          <ul>
            <li>Tốt nghiệp Cao đẳng trở lên</li>
            <li>Không yêu cầu kinh nghiệm (sẽ được đào tạo)</li>
            <li>Giao tiếp tốt, giọng nói dễ nghe</li>
            <li>Kiên nhẫn, nhiệt tình</li>
            <li>Thành thạo vi tính văn phòng</li>
          </ul>

          <h2>Quyền lợi</h2>
          <ul>
            <li>Lương: 10-15 triệu VND</li>
            <li>Thưởng theo hiệu quả công việc</li>
            <li>Đào tạo kỹ năng miễn phí</li>
            <li>Các chế độ phúc lợi theo luật lao động</li>
            <li>Môi trường trẻ trung, thân thiện</li>
          </ul>
        `,
      },
    },
    {
      fields: {
        slug: "chuyen-vien-phap-ly",
        name: "Chuyên viên Pháp lý",
        field: "Pháp lý",
        experience: "2-3 năm kinh nghiệm",
        address: "Hồ Chí Minh",
        salary: "18 - 25 triệu VND",
        employmentType: "Toàn thời gian",
        description: `
          <h2>Mô tả công việc</h2>
          <ul>
            <li>Tư vấn pháp lý cho các giao dịch bất động sản</li>
            <li>Soạn thảo, thẩm định hợp đồng</li>
            <li>Kiểm tra pháp lý dự án, sản phẩm BDS</li>
            <li>Giải quyết các vấn đề pháp lý phát sinh</li>
            <li>Theo dõi, cập nhật các quy định pháp luật</li>
          </ul>

          <h2>Yêu cầu công việc</h2>
          <ul>
            <li>Tốt nghiệp Đại học Luật</li>
            <li>Có 2-3 năm kinh nghiệm trong lĩnh vực BDS</li>
            <li>Nắm vững pháp luật về bất động sản, đất đai</li>
            <li>Kỹ năng phân tích, tư duy logic tốt</li>
            <li>Có chứng chỉ hành nghề luật là một lợi thế</li>
          </ul>

          <h2>Quyền lợi</h2>
          <ul>
            <li>Lương: 18-25 triệu VND</li>
            <li>Thưởng theo dự án</li>
            <li>BHXH, BHYT đầy đủ</li>
            <li>Hỗ trợ học tập, nâng cao chuyên môn</li>
            <li>Cơ hội thăng tiến cao</li>
          </ul>
        `,
      },
    },
    {
      fields: {
        slug: "ke-toan-truong",
        name: "Kế toán trưởng",
        field: "Tài chính - Kế toán",
        experience: "5+ năm kinh nghiệm",
        address: "Hồ Chí Minh",
        salary: "30 - 40 triệu VND",
        employmentType: "Toàn thời gian",
        description: `
          <h2>Mô tả công việc</h2>
          <ul>
            <li>Quản lý và giám sát toàn bộ hoạt động kế toán</li>
            <li>Lập báo cáo tài chính định kỳ</li>
            <li>Xây dựng quy trình kế toán, kiểm soát nội bộ</li>
            <li>Quản lý ngân sách, dòng tiền của công ty</li>
            <li>Làm việc với các cơ quan thuế, kiểm toán</li>
          </ul>

          <h2>Yêu cầu công việc</h2>
          <ul>
            <li>Tốt nghiệp Đại học chuyên ngành Kế toán - Tài chính</li>
            <li>Có 5+ năm kinh nghiệm ở vị trí Kế toán trưởng</li>
            <li>Nắm vững chuẩn mực kế toán, thuế Việt Nam</li>
            <li>Có chứng chỉ CPA là một lợi thế</li>
            <li>Kỹ năng lãnh đạo, quản lý tốt</li>
          </ul>

          <h2>Quyền lợi</h2>
          <ul>
            <li>Lương: 30-40 triệu VND (thỏa thuận)</li>
            <li>Thưởng cuối năm theo hiệu quả kinh doanh</li>
            <li>BHXH, BHYT, BHTN đầy đủ</li>
            <li>Chế độ nghỉ phép, nghỉ lễ theo quy định</li>
            <li>Môi trường làm việc chuyên nghiệp</li>
          </ul>
        `,
      },
    },
  ];

  return (
    <main>
      <JobDescription data={data} />
    </main>
  );
}
