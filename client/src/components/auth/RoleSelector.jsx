const RoleSelector = ({ role, setRole }) => {
  return (
    <div className="mb-6">

      <label className="block mb-3 font-medium">

        Register As

      </label>

      <div className="flex gap-6">

        <label className="flex items-center gap-2 cursor-pointer">

          <input
            type="radio"
            value="tenant"
            checked={role === "tenant"}
            onChange={(e) => setRole(e.target.value)}
          />

          Tenant

        </label>

        <label className="flex items-center gap-2 cursor-pointer">

          <input
            type="radio"
            value="landlord"
            checked={role === "landlord"}
            onChange={(e) => setRole(e.target.value)}
          />

          Landlord

        </label>

      </div>

    </div>
  );
};

export default RoleSelector;