import {
  CAlert,
  CButton,
  CCard,
  CCardBody,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
} from '@coreui/react';
import AdminDashboard from '../../AdminDashboard';
import { useForm } from '@inertiajs/react';

const EditCoupon = ({ coupon }) => {
  const { data, setData, post, processing, errors } = useForm({
    id: coupon.id,
    name: coupon.name,
    discount: coupon.discount,
    validity: coupon.validity,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('admin.coupon.update'));
  };

  return (
    <>
      <AdminDashboard title="Edit Coupon">
        <CCard className="w-full md:w-2/3 shadow-lg rounded-lg">
          <CCardBody>
            <CForm onSubmit={handleSubmit}>
              {/* Name Field */}
              <CCol className="mb-3">
                <CFormLabel htmlFor="name">Coupon Name</CFormLabel>
                <CFormInput
                  type="text"
                  id="name"
                  value={data.name}
                  onChange={(e) => setData('name', e.target.value)}
                  placeholder="Enter Coupon name"
                  invalid={!!errors.name}
                />
                {errors.name && <CAlert color="danger">{errors.name}</CAlert>}
              </CCol>

              {/* Discount Field */}
              <CCol className="mb-3">
                <CFormLabel htmlFor="name">Coupon Discount</CFormLabel>
                <CFormInput
                  type="text"
                  id="discount"
                  value={data.discount}
                  onChange={(e) => setData('discount', e.target.value)}
                  placeholder="Enter Coupon Discount"
                  invalid={!!errors.discount}
                />
                {errors.discount && (
                  <CAlert color="danger">{errors.discount}</CAlert>
                )}
              </CCol>

              {/* Validity Field */}
              <CCol className="mb-3">
                <CFormLabel htmlFor="name">Coupon Validity Date</CFormLabel>
                <CFormInput
                  type="date"
                  id="validity"
                  value={data.validity}
                  onChange={(e) => setData('validity', e.target.value)}
                  placeholder="Enter Coupon validity"
                  invalid={!!errors.validity}
                  min={new Date().toISOString().split('T')[0]}
                />
                {errors.validity && (
                  <CAlert color="danger">{errors.validity}</CAlert>
                )}
              </CCol>

              {/* Submit Button */}
              <CButton
                type="submit"
                color="primary"
                className="m-2"
                disabled={processing}
              >
                {processing ? 'Loading...' : 'Update'}
              </CButton>
            </CForm>
          </CCardBody>
        </CCard>
      </AdminDashboard>
    </>
  );
};

export default EditCoupon;
