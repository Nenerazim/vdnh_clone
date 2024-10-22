<script lang="ts" setup>
import Contacts from '@ui/components/Contacts';
import {useContactsStore} from '@app/Stores/ContactsStore';

const store = useContactsStore();
const {params} = useRoute();
const page = await store.getCurrentContacts(params.slug.toString());
</script>
<template>
	<Contacts :component="page.contacts" />
</template>
