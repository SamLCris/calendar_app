# Generated by Django 4.2.5 on 2023-11-06 18:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tareas', '0008_alter_task_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='task',
            name='hash',
            field=models.CharField(blank=True, max_length=200),
        ),
    ]
