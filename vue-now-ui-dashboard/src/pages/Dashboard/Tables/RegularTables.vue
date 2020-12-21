<template>
  <div class="row">
    <div class="col-md-12">
      <card card-body-classes="table-full-width">
        <div slot="header">
          <h4 class="card-title">Striped table</h4>
        </div>
        <el-table :data="tableData">
          <el-table-column min-width="150" label="Name" property="name"></el-table-column>
          <el-table-column min-width="150" label="Country" property="country"></el-table-column>
          <el-table-column min-width="150" label="City" property="city"></el-table-column>
          <el-table-column min-width="150" align="right" header-align="right" label="Salary" property="salary"></el-table-column>
        </el-table>
      </card>
    </div>

    <div class="col-md-12">
      <card class="card-plain" card-body-classes="table-full-width">
        <div slot="header">
          <h4 class="card-title">Table on Plain Background</h4>
        </div>
        <el-table header-cell-class-name="table-transparent"
                  header-row-class-name="table-transparent"
                  row-class-name="table-transparent"
                  :data="tableData">
          <el-table-column min-width="150" label="Name" property="name"></el-table-column>
          <el-table-column min-width="150" label="Country" property="country"></el-table-column>
          <el-table-column min-width="150" label="City" property="city"></el-table-column>
          <el-table-column min-width="150" align="right" header-align="right" label="Salary" property="salary"></el-table-column>
        </el-table>
      </card>
    </div>

    <div class="col-md-12">
      <card card-body-classes="table-full-width">
        <div slot="header">
          <h4 class="card-title">Regular Table with Colors</h4>
        </div>
        <el-table :row-class-name="tableRowClassName"
                  :data="tableData">
          <el-table-column min-width="150" label="Name" property="name"></el-table-column>
          <el-table-column min-width="150" label="Country" property="country"></el-table-column>
          <el-table-column min-width="150" label="City" property="city"></el-table-column>
          <el-table-column min-width="150" align="right" header-align="right" label="Salary" property="salary"></el-table-column>
        </el-table>
      </card>
    </div>

  </div>
</template>
<script>
import { Table, TableColumn } from 'element-ui';

export default {
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn
  },
  data() {
    return {
      tableData: [
        {
          id: 1,
          name: 'Dakota Rice',
          salary: '$36.738',
          country: 'Niger',
          city: 'Oud-Turnhout'
        },
        {
          id: 2,
          name: 'Minerva Hooper',
          salary: '$23,789',
          country: 'Curaçao',
          city: 'Sinaai-Waas'
        },
        {
          id: 3,
          name: 'Sage Rodriguez',
          salary: '$56,142',
          country: 'Netherlands',
          city: 'Baileux'
        },
        {
          id: 4,
          name: 'Philip Chaney',
          salary: '$38,735',
          country: 'Korea, South',
          city: 'Overland Park'
        },
        {
          id: 5,
          name: 'Doris Greene',
          salary: '$63,542',
          country: 'Malawi',
          city: 'Feldkirchen in Kärnten'
        }
      ]
    };
  },
  methods: {
    tableRowClassName({ rowIndex }) {
      if (rowIndex === 0) {
        return 'table-success';
      } else if (rowIndex === 2) {
        return 'table-info';
      } else if (rowIndex === 4) {
        return 'table-danger';
      } else if (rowIndex === 6) {
        return 'table-warning';
      }
      return '';
    }
  }
};
</script>
<style>
.table-transparent {
  background-color: transparent !important;
}
</style>
