# Generated by Django 4.2.5 on 2023-11-06 18:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tareas', '0007_alter_task_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]