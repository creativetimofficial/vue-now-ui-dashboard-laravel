<template>
  <div class="row">
    <div class="col-xl-12 order-xl-1">
      <div class="alert alert-danger" style="z-index: 9 !important">
        <strong
          >Add, Edit, Delete features are not functional. This is a PRO feature!
          Click
          <a
            href="https://www.creative-tim.com/live/vue-now-ui-dashboard-pro-laravel"
            target="_blank"
            id="pro-feature"
            >here</a
          >
          to see the PRO product.</strong
        >
      </div>
      <card card-body-classes="table-full-width" no-footer-line>
        <h4 slot="header" class="card-title">Users List</h4>
        <div
          class="col-12 text-right"
          style="margin-bottom: 10px; margin-top: -50px"
        >
          <n-button
            type="primary"
            class="btn btn-sm btn-primary"
            @click.native="onProFeature()"
          >
            <span>Add User</span>
          </n-button>
        </div>
        <div>
          <div
            class="col-12 d-flex justify-content-center justify-content-sm-between flex-wrap"
          ></div>
          <el-table stripe style="width: 100%" :data="tableData">
            <el-table-column
              v-for="column in tableColumns"
              :key="column.label"
              :min-width="column.minWidth"
              :prop="column.prop"
              :label="column.label"
            >
            </el-table-column>

            <el-table-column :min-width="135" fixed="right" label="Actions">
              <div
                slot-scope="{ row }"
                class="table-actions"
                style="margin-left: 10px"
              >
                <el-tooltip content="Edit" :open-delay="300" placement="top">
                  <n-button
                    @click.native="onProFeature()"
                    type="info"
                    size="sm"
                    round
                    icon
                  >
                    <i class="now-ui-icons ui-2_settings-90"></i>
                  </n-button>
                </el-tooltip>

                <el-tooltip content="Delete" :open-delay="300" placement="top">
                  <n-button
                    @click.native="onProFeature()"
                    class="remove"
                    type="danger"
                    size="sm"
                    round
                    icon
                  >
                    <i class="fa fa-times"></i>
                  </n-button>
                </el-tooltip>
              </div>
            </el-table-column>
          </el-table>
        </div>
        <div slot="footer" class="card-footer d-flex justify-content-end">
          <n-pagination class="pagination-no-border" :total="total">
          </n-pagination>
        </div>
      </card>
    </div>
  </div>
</template>
<script>
import { Table, TableColumn, Select, Option } from "element-ui";
import { Pagination as NPagination } from "src/components";

export default {
  components: {
    NPagination,
    [Select.name]: Select,
    [Option.name]: Option,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
  },
  data() {
    return {
      total: 1,
      tableColumns: [
        {
          prop: "name",
          label: "Name",
          minWidth: 250,
        },
        {
          prop: "email",
          label: "Email",
          minWidth: 250,
        },
        {
          prop: "created_at",
          label: "Created At",
          minWidth: 250,
        },
      ],
      tableData: [
        {
          name: "Admin",
          email: "admin@jsonapi.com",
          created_at: "2020-01-01",
        },
      ],
    };
  },

  methods: {
    onProFeature() {
      this.$store.dispatch("alerts/error", "This is a PRO feature.");
    },
  },
};
</script>
<style>
#pro-feature {
  font-weight: bold;
  color: #007bff;
}
</style>
